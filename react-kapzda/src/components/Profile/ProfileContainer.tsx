
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUserProfileInfo, getUserStatus, savePhoto, saveProfile, updateUserStatus } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { profileType } from '../../Types/Types';
import { WithAuthRedirect } from '../HOC/withAuthRedirect';
import Profile from './Profile';

type OwnProps = {
   match: any
}

type MapStatePropsType = {
   authorizedUserId: number | null
   profile: profileType | null,
   status: string | null,
   isAuth: boolean
};

type MapDispatchPropsType = {
   getUserProfileInfo: (userId: number) => any
   getUserStatus: (userId: number) => string | null
   updateUserStatus: (status: string)=> string
   savePhoto: (photo: any)=> void
   saveProfile: (formData: profileType)=> any
}

type PropsType = OwnProps & MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {
   
   refreshProfile() {
      let userId = this.props.match.params.userId;
      // if (!userId) userId = 14188;
      if (!userId) {
         userId = this.props.authorizedUserId
         // if (!userId) this.props.history.push('/login');
      };
      this.props.getUserProfileInfo(userId);
      this.props.getUserStatus(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps: any, prevState: any) {
      if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
      }
   }

   render() {
      return <Profile
         {...this.props}
         isOwner={!this.props.match.params.userId}
         savePhoto={this.props.savePhoto}
      />
   }
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authorizedUserId: state.auth.id,
      isAuth: state.auth.isAuth
   }
}

// const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
// const withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getUserProfileInfo })(withUrlDataContainerComponent);

export default compose<React.ComponentType>(
   connect(mapStateToProps, { getUserProfileInfo, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
   withRouter,
   WithAuthRedirect
)(ProfileContainer);