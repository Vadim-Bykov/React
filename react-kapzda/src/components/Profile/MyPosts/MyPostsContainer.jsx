import React from 'react'
import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer1 = (props) => {

//    const addPost = () => {
//       props.dispatch(addPostActionCreator());
//    };

//    const changePostText = (text) => {
//       props.dispatch(updatePostActionCreator(text));
//    };

//    return <MyPosts
//       addPost={addPost}
//       changePostText={changePostText}
//       posts={props.posts}
//       postText={props.postText}
//    />
// }

const mapStateToProps = (state)=> {
   return {
      posts: state.profilePage.posts,
      postText: state.profilePage.postText
  } 
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator())
      },
      changePostText: (text) => {
         const action = updatePostActionCreator(text);
         dispatch(action)
      }

   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;