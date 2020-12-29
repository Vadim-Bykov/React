import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
   return (<div>
      <div>
         <img src="https://reactapp.ir/wp-content/uploads/reactjs.jpg" alt="react" />
      </div>
      <div className={s.descriptionBlock}>Avatar + description</div>
   </div>);
}
export default ProfileInfo;