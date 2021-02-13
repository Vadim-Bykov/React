import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';

const defaultPhoto = 'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg';

const User = React.memo(({user,followingInProgress,unfollow, follow}) => {

   return (
      <div className={style.userBlock}>
         <div className={style.user}>
            <div className={style.photoBlock}>
               <div>
                  <NavLink to={'./profile/' + user.id}>
                     <img src={user.photos.small || defaultPhoto} className={style.usersPhoto} alt='ava' />
                  </NavLink>
               </div>
               <div>
                  {user.followed
                     ? <button disabled={followingInProgress.some(id => id === user.id)} className={style.btn}
                        onClick={() => unfollow(user.id)}
                     >Follow</button>
                     : <button disabled={followingInProgress.some(id => id === user.id)} className={style.btn}
                        onClick={() => follow(user.id)}
                     >Unfollow</button>}
               </div>
            </div>

            <div className={style.userInfo}>
               <div className={style.nameStatus}>
                  <p>{user.name}</p>
                  <p>{user.status}</p>
               </div>
               <div className={style.location}>
                  <p>{'user.location.country'}</p>
                  <p>{'user.location.city'}</p>
               </div>
            </div>
         </div>
      </div>)
}
);

export default User;