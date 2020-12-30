import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   let path = "/dialogs/" + ' ' + props.id;
  return <div className={s.itemName}>
     {/* <NavLink activeClassName={s.active} to={"/dialogs/" + ' ' + props.id}>{props.name}</NavLink> */}
     <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>

   </div>
}

const Message = (props) => {
   return <div className={s.message}>{props.message}</div>
}

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

            {/* <DialogItem name={dialogs[0].name} id={dialogs[0].id} /> */}
            
            {/* <div className={s.itemName}>
               <NavLink to="/dialogs/2">Tanya</NavLink>
            </div */}
         </div>
         <div className={s.messages}>
            {messagesElements}
            {/* <Message message={messages[0].message}></Message> */}

            {/* <div className={s.message}>Hello</div> */}
         </div>
      </div>
   );
};

export default Dialogs;