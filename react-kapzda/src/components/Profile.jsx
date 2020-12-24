import s from './Profile.module.css';
const Profile = () => {
   return (<div className={s.content}>
      <div>
         <img src="https://reactapp.ir/wp-content/uploads/reactjs.jpg" alt="react" />
      </div>
      <div>Avatar + description</div>
      <div className={s.posts}>
        My Post
         <div className={s.item}>New post</div>
         <div className={s.item}>post 1</div>
         <div className={s.item}>post 1</div>
      </div>
   </div>);
}
export default Profile;