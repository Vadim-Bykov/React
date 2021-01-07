import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../redux/state';

const Dialogs = (props) => {
   const dialogsElements = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   const messagesElements = props.dialogPage.messages.map(message => <Message message={message.message}/>);

   // const newText = React.createRef();

   const addMessage = () => {
      props.dispatch(addMessageActionCreator());
   };
   
   const changeMessage = (e) => {
      const currentText = e.target.value;
      props.dispatch(updateMessageActionCreator(currentText));
   };

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
         <div className={s.textareaBlock}>
            <textarea
               // ref={newText}
               placeholder="Enter the text"
               value={props.dialogPage.messageText}
               onChange={changeMessage}
            />
            <button onClick={addMessage}>Add message</button>
         </div>
      </div>
   );
};

export default Dialogs;