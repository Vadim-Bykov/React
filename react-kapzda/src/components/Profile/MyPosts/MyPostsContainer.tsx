import { connect } from 'react-redux';
import { actions } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

const mapStateToProps = (state: AppStateType)=> {
   return {
      posts: state.profilePage.posts,
      // postText: state.profilePage.postText
  } 
} 

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
   addPost: (myPostForm: string) => void;
}

// {} ownProps если они есть 
const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
   addPost: actions.addPostActionCreator,
   // changePostText: updatePostActionCreator,
})(MyPosts);

export default MyPostsContainer;

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



// const mapDispatchToProps = (dispatch) => {
//    return {
//       addPost: () => {
//          dispatch(addPostActionCreator())
//       },
//       changePostText: (text) => {
//          const action = updatePostActionCreator(text);
//          dispatch(action)
//       }

//    }
// }

// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

