import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfileInfo } from '../../redux/profile-reducer';
import { WithAuthRedirect } from '../HOC/withAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {
   
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) userId = 2;
      this.props.getUserProfileInfo(userId)
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile} />
   }
};


const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
   }
}

const withUrlDataContainerComponent = withRouter(AuthRedirectComponent);


export default connect(mapStateToProps, {getUserProfileInfo})(withUrlDataContainerComponent);