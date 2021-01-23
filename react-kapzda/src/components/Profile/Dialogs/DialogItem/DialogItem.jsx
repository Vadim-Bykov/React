import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   let path = `/dialogs/ ${props.id}`;
   return <div className={s.itemName}>
      <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
   </div>

}

export default DialogItem;