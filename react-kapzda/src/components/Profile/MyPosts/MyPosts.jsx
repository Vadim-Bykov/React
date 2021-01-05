import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react'

const MyPosts = (props) => {

   const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

   const newPostText = React.createRef();

   // const addPost = () => {
   //    const text = newPostText.current.value
   //    props.addPost(text)
   // }

   const changePostText = () => {
      const text = newPostText.current.value
      props.updatePostText(text)
      
   }

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
            <button onClick={props.addPost}>Add post</button>
            <button>Remove</button>
         </div>
         <div className={s.posts}>
            { postsElements }
         </div>

      </div>
   );
}
export default MyPosts;