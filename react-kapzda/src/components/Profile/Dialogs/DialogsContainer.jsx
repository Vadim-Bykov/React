import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator } from '../../../redux/dialog-reducer';
// import { WithAuthRedirect } from '../../HOC/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogPage.dialogs,
      messages: state.dialogPage.messages,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: (newMessage) => dispatch(addMessageActionCreator(newMessage))
   }
};

// const AuthRedirectComponent = WithAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   // WithAuthRedirect
)(Dialogs);