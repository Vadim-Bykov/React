import s from './Post.module.css';
const Post = (props) => {
   return (
      <div className={s.item}>
         <img className='avatar' src='https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg' />
            {props.message}
         <div>Like</div>
      </div>
   );
}
export default Post;