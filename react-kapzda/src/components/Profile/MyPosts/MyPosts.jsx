import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
   const postsData = [
      { id: 1, message: 'Hello', likesCount: 11 },
      { id: 2, message: 'How are you?', likesCount: 12 },
      { id: 3, message: 'Hi!', likesCount: 13 },
      { id: 4, message: 'Yoo', likesCount: 14 }
   ];

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
            <Post message={ postsData[0].message } likesCount={ postsData[0].likesCount } />
            <Post message={ postsData[1].message } likesCount={ postsData[1].likesCount } />
            <Post message={ postsData[2].message } likesCount={ postsData[2].likesCount } />
         </div>

      </div>
);
}
export default MyPosts;