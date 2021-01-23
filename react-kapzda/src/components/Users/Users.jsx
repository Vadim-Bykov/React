import { NavLink } from 'react-router-dom';
import style from './Users.module.css'

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
      let pages = [];

      for (let i = 1; i <= pagesCount; i++){
         pages.push(i);
   };
  
   return (
      <div>
         <div className={style.pagesBlock}>
            {
               pages.map((pageNumber, i) => <span
                  onClick={() => props.changePage(pageNumber)}
                  className={props.currentPage === pageNumber ? style.selected : ('', style.span)}
                  key={i}>{pageNumber}
               </span>)
            }
         </div>

         {props.users.map((user, index) => <div className={style.userBlock} key={index}>
            <div className={style.user}>
               <div className={style.photoBlock}>
                  <div>
                     <NavLink to={'./profile/' + user.id}>
                        <img src={user.photos.small || 'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg'} className={style.usersPhoto} alt='ava' />
                     </NavLink>
                  </div>
                  <div>
                     {user.followed
                        ? <button disabled={props.followingInProgress.some(id=> id === user.id)} className={style.btn}
                           onClick={() => props.unfollow(user.id)}
                        >Follow</button>
                        : <button disabled={props.followingInProgress.some(id=> id === user.id)} className={style.btn}
                           onClick={() => props.follow(user.id)}
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
         </div>)}
      </div>
   );
};

export default Users;