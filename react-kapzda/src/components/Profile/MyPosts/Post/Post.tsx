import s from './Post.module.css';
type PropsType = {
  message: string;
  likesCount: number | null;
};

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.item}>
      <img
        className='avatar'
        alt='avatar'
        src='https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg'
      />
      <p>{props.message}</p>
      <p>Like {props.likesCount}</p>
    </div>
  );
};
export default Post;
