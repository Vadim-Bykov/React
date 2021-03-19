import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterType, requestUsers, follow } from '../../redux/users-reducer';
import {
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter,
  getFollowingInProgress,
} from '../../redux/users-selectors';
import { userType } from '../../Types/Types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserSearchForm } from './UsersSearchForm';

type PropsTypes = {
  // totalUsersCount: number;
  // pageSize: number;
  // currentPage: number;
  // changePage: (pageNumber: number) => void;
  // users: Array<userType>;
  // followingInProgress: Array<number>;
  // unfollow: (userId: number) => void;
  // follow: (userId: number) => void;
  // onFilterChanged: (filter: FilterType)=> void
  // user?: any
};

const Users: React.FC = React.memo(() => {
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const filter = useSelector(getUsersFilter);
  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter));
  }, []);

  const changePage = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };

  const follow = (userId: number) => {
    dispatch(follow(userId));
  };
  const unfollow = (userId: number) => {
    dispatch(unfollow(userId));
  };

  return (
    <div>
      <UserSearchForm onFilterChanged={onFilterChanged} />

      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        changePage={changePage}
        currentPage={currentPage}
      />

      {users.map((user) => (
        <User
          user={user}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
          key={user.id}
        />
      ))}
    </div>
  );
});

// const usersSearchFormValidate = (values: any) => {
//    const errors = {};
//    return errors;
// }

// type TUsersFormSearch = {
//    term: string
// }

// const UserSearchForm: React.FC = () => {

//    const submit = (values: TUsersFormSearch, { setSubmitting }: {setSubmitting:(isSubmitting: boolean) => void}) => {

//     }

//    return(
//       <div>
//          <Formik
//        initialValues={{ term: ''}}
//        validate={usersSearchFormValidate}
//        onSubmit={submit}
//      >
//        {({ isSubmitting }) => (
//          <Form>
//            <Field type="text" name="term" />
//            <button type="submit" disabled={isSubmitting}>
//              Find
//            </button>
//          </Form>
//        )}
//      </Formik>
//       </div >
//    )
// }

export default Users;
