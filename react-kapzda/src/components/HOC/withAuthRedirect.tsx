import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';

const mapStateToPropsForRedirect = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

type mapStateToPropsType = {
  isAuth: boolean;
};

export function WithAuthRedirect<WCP>(
  WrappedComponent: React.ComponentType<WCP>
) {
  // class RedirectComponent extends React.Component {
  //   render() {
  //     if (!this.props.isAuth) return <Redirect to='/login' />;
  //     return <Component {...this.props} />;
  //   }
  // }

  const RedirectComponent: React.FC<mapStateToPropsType> = (props) => {
    const { isAuth, ...restProps } = props;
    if (!props.isAuth) return <Redirect to='/login' />;

    // return <WrappedComponent {...restProps as unknown as WCP} />;
    return <WrappedComponent {...(restProps as WCP)} />;
  };

  const ConnectedRedirectComponent = connect<
    mapStateToPropsType,
    {},
    WCP,
    AppStateType
  >(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedRedirectComponent;
}
