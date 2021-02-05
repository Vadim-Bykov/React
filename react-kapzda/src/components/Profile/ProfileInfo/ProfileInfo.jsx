import { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import ReduxProfileDataForm from './ProfileDataForm';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
   const [editMode, setEditMode] = useState(false);

   if (!props.profile) return <Preloader />;

   const choosePhoto = (e) => {
      const photo = e.target.files[0]; // массив
      if (e.target.files.length) props.savePhoto(photo);
   }

   const onSubmit = (formData) => {
 
      props.saveProfile(formData).then(() => {
         setEditMode(false)
      });
   }

   return (
      <div>
         <div>
            <img className={s.bg} src="https://reactapp.ir/wp-content/uploads/reactjs.jpg" height="150px" alt="react" />
         </div>
         <div className={s.descriptionBlock}>
            <div>
               <img className={s.ava} src={props.profile.photos.small || 'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg'} alt="ava" />
               {props.isOwner && <input type="file" onChange={choosePhoto} />}
            </div>
            {editMode
               ? <ReduxProfileDataForm profile={props.profile} isOwner={props.isOwner} onSubmit={onSubmit} saveProfile={props.saveProfile} initialValues={props.profile} />
               : <ProfileData isOwner={props.isOwner} goToEditMode={()=> setEditMode(true)} profile={props.profile} />}
         </div>
      </div>
   );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
   return (
      <div className={s.description}>
         {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
         <div><b>full Name:</b> {profile.fullName}</div>
         <div><b>about Me:</b> {profile.aboutMe}</div>
         <div><b>Looking For A Job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
         <div><b>Skills:</b> {profile.lookingForAJobDescription}</div>
         <div><b>contacts:</b> {Object
            .keys(profile.contacts)
            .map(key => <Contact key={key} title={key} value={profile.contacts[key]} />)}</div>
      </div>
   );
}

const Contact = ({ title, value }) => {
   return <div className={s.contact}><b>{title}:</b>{value}</div>
};

export default ProfileInfo;