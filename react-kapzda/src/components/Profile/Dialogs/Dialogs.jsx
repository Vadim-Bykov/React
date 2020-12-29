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
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name="Vadim" id="1" />
            <DialogItem name="Tanya" id="2" />
            <DialogItem name="Eva" id="3" />
            <DialogItem name="Slavik" id="4" />
            
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
            <Message message="Hello"></Message>
            <Message message="How are you?"></Message>
            <Message message="Hi!"></Message>
            <Message message="Yoo"></Message>
            {/* <div className={s.message}>Hello</div> */}
            {/* <div className={s.message}>How are you?</div> */}
            {/* <div className={s.message}>Hi!</div> */}
         </div>
      </div>
   );
};

export default Dialogs;