import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
   const posts = [
      { id: 1, message: 'Hello', likesCount: 11 },
      { id: 2, message: 'How are you?', likesCount: 12 },
      { id: 3, message: 'Hi!', likesCount: 13 },
      { id: 4, message: 'Yoo', likesCount: 14 },
      { id: 5, message: 'Yoo', likesCount: 15 }
   ];

   const postsElements = posts.map(post => <Post message={ post.message } likesCount={ post.likesCount } />)

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
            { postsElements }
            {/* <Post message={ posts[0].message } likesCount={ posts[0].likesCount } / */}
         </div>

      </div>
   );
}
export default MyPosts;