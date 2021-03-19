// import { follow, unfollow, requestUsers, FilterType } from "../../redux/users-reducer";
// import { WithAuthRedirect } from "../HOC/withAuthRedirect";
// import { compose } from "redux";
// import { type } from "os";
// import { userType } from "../../Types/Types";
// import { AppStateType } from "../../redux/redux-store";
import React from 'react';
import { useSelector } from 'react-redux';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { getIsFetching } from '../../redux/users-selectors';

type UsersPagePropsType = {
  pageTitle: string;
};

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
  const isFetching = useSelector(getIsFetching);

  return (
    <>
      <h2>{props.pageTitle}</h2>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};

// export default UsersPage;

// type MapStatePropsType = {
//    currentPage: number
//    pageSize: number
//    isFetching: boolean
//    totalUsersCount: number
//    users: Array<userType>
//    followingInProgress: Array<number>
//    filter: FilterType
// }

// type MapDispatchPropsType = {
//    follow: (userId: number) => void
//    unfollow: (userId: number) => void
//    requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
// }

// type OwnPropsType = {
//    pageTitle: string
// }

// type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

// type PropsType = {
//    pageTitle: string
//    currentPage: number
//    pageSize: number
//    isFetching: boolean
//    totalUsersCount: number
//    users: Array<userType>
//    followingInProgress: Array<number>

//    requestUsers: (currentPage: number, pageSize: number) => void
//    unfollow: () => void
//    follow: () => void
// }

// class UsersComponent extends React.PureComponent<PropsType> {

//    componentDidMount = () => {
//       const { currentPage, pageSize, filter, ...props } = this.props;
//       props.requestUsers(currentPage, pageSize, filter);
//    };

//    changePage = (pageNumber: number) => {
//       const { pageSize, filter } = this.props;
//       this.props.requestUsers(pageNumber, pageSize, filter);
//    }

//    onFilterChanged = (filter: FilterType) => {
//       const { pageSize } = this.props;
//       this.props.requestUsers(1, pageSize, filter);
//    }

//    render = () => {
//       // console.log('render');
//       return (
//          <>
//             <h2>{this.props.pageTitle}</h2>
//             {this.props.isFetching
//                ? <Preloader />
//                : null}
//             <Users
//                // users={this.props.users}
//                // totalUsersCount={this.props.totalUsersCount}
//                // pageSize={this.props.pageSize}
//                // currentPage={this.props.currentPage}
//                // follow={this.props.follow}
//                // unfollow={this.props.unfollow}
//                // changePage={this.changePage}
//                // followingInProgress={this.props.followingInProgress}
//                // onFilterChanged={this.onFilterChanged}
//             />
//          </>
//       )
//    };
// };

// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//    // console.log('mapState');
//    return {
//       users: getUsers(state),
//       pageSize: getPageSize(state),
//       currentPage: getCurrentPage(state),
//       totalUsersCount: getTotalUsersCount(state),
//       isFetching: getIsFetching(state),
//       followingInProgress: getFollowingInProgress(state),
//       filter: getUsersFilter(state),
//    }
// };

// const mapDispatchToProps = {
//    follow, unfollow, requestUsers
// }

// /* TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState */

// const UsersContainer = compose(
//    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps),
//    // WithAuthRedirect
// )(UsersComponent);

// export default UsersContainer;

// const mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId));
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId));
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users));
//       },
//       setCurrentPage: (pageNumber)=> dispatch(setCurrentPageAC(pageNumber)),
//       setTotalUsersCount: (pageNumber)=> dispatch(setTotalUsersCountAC(pageNumber)),
//       toggleIsFetching: (isFetching)=> dispatch(toggleIsFetchingAC(isFetching)),

//    }
// }
