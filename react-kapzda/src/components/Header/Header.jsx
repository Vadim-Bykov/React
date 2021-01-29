// import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = (props) => {
   return <header className={s.header}>
      <div>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="react" />
      </div>
      {props.isAuth
         ? <div className={s.logInfo}>
            <p>{props.login}</p>
            <img className={s.photo} src={props.photo} alt='ava' />
            <button onClick={props.logout} className={s.logout}>logout</button>
         </div>
         : <NavLink to={'/login'} className={s.login}>Login</NavLink>
      }
      
   </header>
};
export default Header;