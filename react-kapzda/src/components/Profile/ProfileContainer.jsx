import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getUserProfileInfo } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
   
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) userId = 2;
      this.props.getUserProfileInfo(userId)
   }

   render() {
      if(!this.props.isAuth) return <Redirect to='/login'/>

      return <Profile {...this.props} profile={this.props.profile} />
   }
};

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      isAuth: state.auth.isAuth
   }
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfileInfo})(withUrlDataContainerComponent);