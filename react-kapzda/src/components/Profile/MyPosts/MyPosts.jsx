import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react'
// import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

   const postsElements = props.posts.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount} />);

   const newPostText = React.createRef();

   const addPost = () => {
      props.addPost();
   };

   const changePostText = () => {
      const text = newPostText.current.value;
      props.changePostText(text);
   };

   return (
      <div className={s.postsBlock}>
         My posts
         <div>
            <textarea
               ref={newPostText}
               value={props.postText}
               onChange={changePostText}
            />
         </div>
         <div>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
         </div>
         <div className={s.posts}>
            { postsElements }
         </div>

      </div>
   );
}
export default MyPosts;