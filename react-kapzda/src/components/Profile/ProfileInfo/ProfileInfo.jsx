import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
const ProfileInfo = (props) => {
   if (!props.profile) return <Preloader />;

   return (
      <div>
         <div>
            <img className={s.bg} src="https://reactapp.ir/wp-content/uploads/reactjs.jpg" height="150px" alt="react" />
         </div>
         <div className={s.descriptionBlock}>
            <img className={s.ava} src={props.profile.photos.small || 'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg'} alt="ava" />
            <div className={s.description}>
               <p>aboutMe: {props.profile.aboutMe}</p>
               <p>contacts: facebook {props.profile.contacts.facebook}</p>
            </div>
         </div>
      </div>
   );
}
export default ProfileInfo;