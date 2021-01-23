import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/dialog-reducer';
import { WithAuthRedirect } from '../../HOC/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogPage.dialogs,
      messages: state.dialogPage.messages,
      messageText: state.dialogPage.messageText,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => dispatch(addMessageActionCreator()),
      changeMessage: (currentText) => {
         const action = updateMessageActionCreator(currentText);
         dispatch(action);
      }
   }
};

const AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;