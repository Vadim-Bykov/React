import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react'
import MyPostsForm from './MyPostsForm';
// import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

   const postsElements = props.posts.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount} />);

   const onSubmitPost = (e) => {
      const newPost = e.myPostForm;
      props.addPost(newPost);
   }

   return (
      <div className={s.postsBlock}>
         My posts
         <MyPostsForm onSubmit={onSubmitPost} />
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   );
}
export default MyPosts;