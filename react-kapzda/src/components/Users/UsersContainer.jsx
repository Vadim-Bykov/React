import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from "../../redux/users-reducer";
import React from "react";
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../API/api";

class UsersAPIComponent extends React.Component  {
   
   componentDidMount = () => {
      this.props.toggleIsFetching(true);

      usersAPI.getUsersData(this.props.currentPage, this.props.pageSize)
         .then(res => {
            this.props.toggleIsFetching(false)
            this.props.setTotalUsersCount(res.totalCount);
            this.props.setUsers(res.items)
         })
   };

   changePage=(pageNumber)=> {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber);

      usersAPI.getDataChangedPage(pageNumber, this.props.pageSize)
         .then(res => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.items)
         });
   }

   render = () => {
      return (
         <>
            {this.props.isFetching
               ? <Preloader/>
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
               toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
         </>
      )
   };
};

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      totalUsersCount: state.usersPage.totalUsersCount,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
   }
}


const UsersContainer = connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
   toggleFollowingProgress

})(UsersAPIComponent);

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