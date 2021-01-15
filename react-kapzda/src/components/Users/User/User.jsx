import style from './User.module.css'

const User = (props) => {
  
   return (<div className={style.userBlock}>
      <div className={style.user}>
         <div className={style.photoBlock}>
            <div>
               <img src={props.photos} className={style.usersPhoto} />
            </div>
            <div>
               {props.followed
                  ? <button onClick={() => props.unfollow(props.id)}>Follow</button>
                  : <button onClick={() => props.follow(props.id)}>Unfollow</button>}
            </div>
         </div>

         <div className={style.userInfo}>
            <div className={style.nameStatus}>
               <p>{props.name}</p>
               <p>{props.status}</p>
            </div>
            <div className={style.location}>
               <p>{'props.location.country'}</p>
               <p>{'props.location.city'}</p>
            </div>
         </div>
      </div>
   </div>);
};

export default User;