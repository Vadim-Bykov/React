import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getUserProfileInfo,
  getUserStatus,
  savePhoto,
  saveProfile,
  updateUserStatus,
} from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { profileType } from '../../Types/Types';
import { WithAuthRedirect } from '../HOC/withAuthRedirect';
import Profile from './Profile';

type OwnProps = {
  userId: string; // напутаны string и number
};

type PathParamsType = RouteComponentProps<OwnProps>;

// type MapStatePropsType = {
//   authorizedUserId: number | null;
//   profile: profileType | null;
//   status: string;
//   isAuth: boolean;
// };

type MapStatePropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchPropsType = {
  getUserProfileInfo: (userId: number) => void;
  getUserStatus: (userId: number) => string | null;
  updateUserStatus: (status: string) => string;
  savePhoto: (photo: File) => void;
  saveProfile: (formData: profileType) => Promise<boolean>;
};

type PropsType = PathParamsType & MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId;
    // if (!userId) userId = 14188;
    if (!userId) {
      userId = this.props.authorizedUserId;
      // if (!userId) this.props.history.push('/login');
    }

    if (!userId) {
      console.error('ID must exist in URL or in State "authorizedUserId"');
    } else {
      this.props.getUserProfileInfo(userId);
      this.props.getUserStatus(userId);
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

// const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
// const withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getUserProfileInfo })(withUrlDataContainerComponent);

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfileInfo,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);
