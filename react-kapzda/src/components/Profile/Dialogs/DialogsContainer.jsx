import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/dialog-reducer';
import Dialogs from './Dialogs';

// const DialogsContainer1 = (props) => {

//    const addMessage = () => {
//       props.dispatch(addMessageActionCreator());
//    };
   
//    const changeMessage = (currentText) => {
//       props.dispatch(updateMessageActionCreator(currentText));
//    };

//    return <Dialogs
//       addMessage={addMessage}
//       changeMessage={changeMessage}
//       dialogs={props.dialogPage.dialogs}
//       messages={props.dialogPage.messages}
//       messageText={props.dialogPage.messageText}
//    />
// };

const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogPage.dialogs,
      messages: state.dialogPage.messages,
      messageText: state.dialogPage.messageText,
      isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;