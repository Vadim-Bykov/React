import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogsForm from './DialogsForm';
import { dialogType, messageType } from '../../../redux/dialog-reducer';

type OwnProps = {
   dialogs: Array<dialogType>
   messages: Array<messageType>
   addMessage: (newMessage: string) => void
};

export type DialogFormValuesType = {
   dialogForm: string;
 };
 

const Dialogs: React.FC<OwnProps> = (props) => {
   const dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

   const messagesElements = props.messages.map(message => <Message key={message.id} message={message.message}/>);

   const addNewMessage = (values: DialogFormValuesType) => {
      props.addMessage(values.dialogForm)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
         <DialogsForm onSubmit={addNewMessage} />
      </div>
   );
};

export default Dialogs;