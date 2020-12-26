import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
   return (
      <div className={s.posts}>
         <textarea></textarea>
         <button>Add post</button>
         <button>Remove</button>
         <Post message='Hello'/>
         <Post message='My name'/>
         <Post message='Hi.'/>
      </div>
);
}
export default MyPosts;