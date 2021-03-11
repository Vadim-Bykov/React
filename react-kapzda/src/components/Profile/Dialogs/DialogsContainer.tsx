import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions } from '../../../redux/dialog-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { WithAuthRedirect } from '../../HOC/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { ...actions }),
  WithAuthRedirect
)(Dialogs);




// const AuthRedirectComponent = WithAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;