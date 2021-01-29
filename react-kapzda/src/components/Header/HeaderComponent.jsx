import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';
class HeaderComponent extends React.Component {

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

export default connect(mapStateToProps, { logout })(HeaderComponent);