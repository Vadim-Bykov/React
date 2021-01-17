import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "../../redux/users-reducer";
import React from "react";
import axios from 'axios';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";

class UsersAPIComponent extends React.Component  {
   
   componentDidMount = () => {
      this.props.toggleIsFetching(true)
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(res => {
            this.props.toggleIsFetching(false)
            this.props.setTotalUsersCount(res.data.totalCount);
            this.props.setUsers(res.data.items)
         })
   };

   changePage=(pageNumber)=> {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber);
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(res => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.data.items)
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
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber)=> dispatch(setCurrentPageAC(pageNumber)),
      setTotalUsersCount: (pageNumber)=> dispatch(setTotalUsersCountAC(pageNumber)),
      toggleIsFetching: (isFetching)=> dispatch(toggleIsFetchingAC(isFetching)),

   }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;