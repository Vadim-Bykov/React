import React from 'react'
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import style from './Users.module.css'

const Users = React.memo(({totalUsersCount,pageSize,changePage,currentPage, users, ...props}) => {

   return (
      <div>
         <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} changePage={changePage} currentPage={currentPage} />

         {users.map((user, index) => <User
            user={user}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            key={index}
            className={style.userBlock}
         />)}
      </div>
   );
});

export default Users;