import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
   const dialogsElements = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   const messagesElements = props.dialogPage.messages.map(message => <Message message={message.message}></Message>);

   const newText = React.createRef();

   // const addMessage = () => {
   //   const currentText = newText.current.value
   //    props.addMessage(currentText)
   // }
   
   const changeMessage = () => {
     const currentText = newText.current.value
      props.updateMessage(currentText)
   }

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
               ref={newText}
               value={props.dialogPage.messageText}
               onChange={changeMessage}
            />
            <button onClick={props.addMessage}>Add message</button>
         </div>
      </div>
   );
};

export default Dialogs;