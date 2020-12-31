import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
   const dialogs = [
      { id: 1, name: 'Vadim' },
      { id: 2, name: 'Tanya' },
      { id: 3, name: 'Eva' },
      { id: 4, name: 'Slavik' }
   ];

   const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
   
   const messages = [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Hi!' },
      { id: 4, message: 'Yoo' }
   ];

   const messagesElements = messages.map(message => <Message message={message.message}></Message>)
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            { dialogsElements }
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   );
};

export default Dialogs;