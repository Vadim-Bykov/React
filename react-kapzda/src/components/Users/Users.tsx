import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  FilterType,
  requestUsers,
  follow,
  unfollow,
} from '../../redux/users-reducer';
import {
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter,
  getFollowingInProgress,
} from '../../redux/users-selectors';
// import { userType } from '../../Types/Types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserSearchForm } from './UsersSearchForm';
import queryString from 'querystring';

type QueryParamsType = {
  page?: string;
  term?: string;
  friend?: string;
}

const Users: React.FC = React.memo(() => {
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const filter = useSelector(getUsersFilter);
  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(history.location.search.substring(1)) as QueryParamsType;
    // console.log(parsed);

    let actualPage = currentPage;
    let actualFilter = filter;

    if (!!parsed.page) actualPage = Number(parsed.page);
    if (!!parsed.term)
      actualFilter = { ...actualFilter, term: parsed.term as string };

    switch (parsed.friend) {
      case 'null':
        actualFilter = { ...actualFilter, friend: null };
        break;

      case 'true':
        actualFilter = { ...actualFilter, friend: true };
        break;

      case 'false':
        actualFilter = { ...actualFilter, friend: false };
        break;
    }
    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, []);
  
  useEffect(() => {

    const query: QueryParamsType = {};
    if (!!filter.term) query.term = filter.term;
    if (filter.friend !== null) query.friend = String(filter.friend);
    if (currentPage !== 1) query.page = String(currentPage);


    history.push({
      pathname: '/users',
      search: queryString.stringify(query)
      // search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
    })
  }, [filter, currentPage])

  const changePage = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };

  const followRequest = (userId: number) => {
    dispatch(follow(userId));
  };
  const unfollowRequest = (userId: number) => {
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
          unfollow={unfollowRequest}
          follow={followRequest}
          key={user.id}
        />
      ))}
    </div>
  );
});

export default Users;

// type PropsTypes = {
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
// };

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
