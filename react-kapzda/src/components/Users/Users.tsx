import React from 'react'
import { userType } from '../../Types/Types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type PropsTypes = {
   totalUsersCount: number
   pageSize: number
   changePage: (pageNumber: number) => void
   currentPage: number
   users: Array<userType>
   followingInProgress: Array<number>
   unfollow: (userId: number) => void
   follow: (userId: number) => void
   // user?: any
};


const Users: React.FC<PropsTypes> = React.memo(({totalUsersCount,pageSize,changePage,currentPage, users, ...props}) => {

   return (
      <div>
         <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} changePage={changePage} currentPage={currentPage} />

         {users.map((user) => <User
            user={user}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            key={user.id}
         />)}
      </div>
   );
});

export default Users;