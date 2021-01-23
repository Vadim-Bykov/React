import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { identifyUser } from '../../redux/auth-reducer';
class HeaderComponent extends React.Component {

   componentDidMount() {
      this.props.identifyUser()
   }

   render() {
      return <Header {...this.props} />
   } 
};

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      photo: state.auth.photo,
   }
}

export default connect(mapStateToProps, { identifyUser })(HeaderComponent);