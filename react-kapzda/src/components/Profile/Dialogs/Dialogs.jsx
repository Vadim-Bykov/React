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
   const dialogsData = [
      { id: 1, name: 'Vadim' },
      { id: 2, name: 'Tanya' },
      { id: 3, name: 'Eva' },
      { id: 4, name: 'Slavik' }
   ];

   const dialogsElements = [
      <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
      <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
      <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
      <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
   ];

   const messagesData = [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Hi!' },
      { id: 4, message: 'Yoo' }
   ];

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>

            { dialogsElements }

            {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} /> */}
            
            {/* <div className={s.itemName}>
               <NavLink to="/dialogs/2">Tanya</NavLink>
            </div>
            <div className={s.itemName}>
               <NavLink to="/dialogs/3">Eva</NavLink>
            </div>
            <div className={s.itemName}>
               <NavLink to="/dialogs/4">Slavik</NavLink>
            </div> */}
         </div>
         <div className={s.messages}>
            <Message message={messagesData[0].message}></Message>
            <Message message={messagesData[1].message}></Message>
            <Message message={messagesData[2].message}></Message>
            <Message message={messagesData[3].message}></Message>
            {/* <div className={s.message}>Hello</div> */}
            {/* <div className={s.message}>How are you?</div> */}
            {/* <div className={s.message}>Hi!</div> */}
         </div>
      </div>
   );
};

export default Dialogs;