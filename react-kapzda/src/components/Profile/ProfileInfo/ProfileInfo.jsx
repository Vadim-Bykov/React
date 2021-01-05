import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
   return (<div>
      <div>
         <img src="https://reactapp.ir/wp-content/uploads/reactjs.jpg" height="150px" alt="react" />
      </div>
      <div className={s.descriptionBlock}>Avatar + description</div>
   </div>);
}
export default ProfileInfo;