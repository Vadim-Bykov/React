import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUserProfileInfo, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { WithAuthRedirect } from '../HOC/withAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {
   
   componentDidMount() {
      let userId = this.props.match.params.userId;
      // if (!userId) userId = 14188;
      if (!userId) userId = this.props.authorizedUserId;
      this.props.getUserProfileInfo(userId);
      this.props.getUserStatus(userId);
   }

   render() {
      return <Profile
         {...this.props}
      />
   }
};



const mapStateToProps = (state) => {
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

export default compose(
   connect(mapStateToProps, { getUserProfileInfo, getUserStatus, updateUserStatus}),
   withRouter,
   WithAuthRedirect
)(ProfileContainer)