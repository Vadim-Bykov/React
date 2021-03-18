import React from 'react';
import { FilterType } from '../../redux/users-reducer';
import { userType } from '../../Types/Types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserSearchForm } from './UsersSearchForm';

type PropsTypes = {
  totalUsersCount: number;
  pageSize: number;
  changePage: (pageNumber: number) => void;
  currentPage: number;
  users: Array<userType>;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  onFilterChanged: (filter: FilterType)=> void
  // user?: any
};

const Users: React.FC<PropsTypes> = React.memo(
  ({ totalUsersCount, pageSize, changePage, currentPage, users, ...props }) => {
    return (
      <div>
        <UserSearchForm onFilterChanged={props.onFilterChanged} />

        <Paginator
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          changePage={changePage}
          currentPage={currentPage}
        />

        {users.map((user) => (
          <User
            user={user}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            key={user.id}
          />
        ))}
      </div>
    );
  }
);

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
