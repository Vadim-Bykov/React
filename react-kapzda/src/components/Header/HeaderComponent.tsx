import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  isAuth: boolean;
  login: string;
  photo?: string;
};

type MapDispatchPropsType = {
  logout: () => void;
};

export type PropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderComponent extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.photo,
  } as MapStatePropsType;
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { logout })(HeaderComponent);
