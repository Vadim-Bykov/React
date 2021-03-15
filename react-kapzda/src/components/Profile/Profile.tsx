// import Preloader from '../common/preloader/Preloader';
import { profileType } from '../../Types/Types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';

type PropsType = {
   profile: profileType | null
   isOwner: boolean
   savePhoto: (photo: File) => void;
   saveProfile: (formData: profileType) => Promise<boolean>
   status: string
   updateUserStatus: (status: string)=> string
}

const Profile: React.FC<PropsType> = (props) => {
   // if(!props.profile) return <Preloader/>
   return (
      <div>
         <ProfileInfo profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
         <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
         <MyPostsContainer />
      </div>);
};
export default Profile;