import { connect } from "react-redux";
import { follow, unfollow, requestUsers } from "../../redux/users-reducer";
import React from "react";
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
// import { WithAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";
import { getUsers, getPageSize, getCurrentPage, getTotalUsersCount, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors";
import { type } from "os";
import { userType } from "../../Types/Types";
import { AppStateType } from "../../redux/redux-store";

type PropsType = {
   currentPage: number
   pageSize: number
   isFetching: boolean
   totalUsersCount: number
   users: Array<userType>
   followingInProgress: Array<number>

   requestUsers: (currentPage: number, pageSize: number) => void
   unfollow: () => void
   follow: () => void
}

class UsersComponent extends React.PureComponent<PropsType> {
   
   componentDidMount = () => {
      const { currentPage, pageSize, ...props } = this.props;
      props.requestUsers(currentPage, pageSize);
   };

   changePage = (pageNumber: number) => {
      const { pageSize } = this.props;
      this.props.requestUsers(pageNumber, pageSize);
   }

   render = () => {
      // console.log('render');
      return (
         <>
            {this.props.isFetching
               ? <Preloader />
               : null}
            <Users
               users={this.props.users}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               changePage={this.changePage}
               followingInProgress={this.props.followingInProgress}
            />
         </>
      )
   };
};

// const mapStateToProps = (state) => {
//    return {
//       users: state.usersPage.users,
//       pageSize: state.usersPage.pageSize,
//       currentPage: state.usersPage.currentPage,
//       totalUsersCount: state.usersPage.totalUsersCount,
//       isFetching: state.usersPage.isFetching,
//       followingInProgress: state.usersPage.followingInProgress,
//    }
// };

const mapStateToProps = (state: AppStateType) => {
   // console.log('mapState');
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state),
      totalUsersCount: getTotalUsersCount(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
   }
};

const UsersContainer = compose(
   connect(mapStateToProps, { follow, unfollow, requestUsers }),
   // WithAuthRedirect
)(UsersComponent);

export default UsersContainer;



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