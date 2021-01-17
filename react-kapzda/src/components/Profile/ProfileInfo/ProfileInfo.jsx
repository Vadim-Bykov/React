import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
const ProfileInfo = (props) => {
   if(!props.profile) return <Preloader/>

   return (<div>
      <div>
         <img className={s.bg} src="https://reactapp.ir/wp-content/uploads/reactjs.jpg" height="150px" alt="react" />
      </div>
      <div className={s.descriptionBlock}>
         <img className={s.ava} src={props.profile.photos.small} alt="ava"/>
         Avatar + description
      </div>
   </div>);
}
export default ProfileInfo;