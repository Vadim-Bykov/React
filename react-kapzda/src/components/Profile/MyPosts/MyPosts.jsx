import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
   return (
      <div className={s.postsBlock}>
         My posts
         <div>
            <textarea></textarea>
         </div>
         <div>
            <button>Add post</button>
            <button>Remove</button>
         </div>
         <div className={s.posts}>
            <Post message='Hello'/>
            <Post message='My name'/>
            <Post message='Hi.'/>
         </div>

      </div>
);
}
export default MyPosts;