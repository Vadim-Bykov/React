import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
   const dialogsElements = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   const messagesElements = props.dialogPage.messages.map(message => <Message message={message.message}></Message>)
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            { dialogsElements }
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
         <div>
            <textarea />
            <button>Add message</button>
         </div>
      </div>
   );
};

export default Dialogs;