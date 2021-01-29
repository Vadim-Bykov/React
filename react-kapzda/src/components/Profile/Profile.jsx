// import Preloader from '../common/preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';
const Profile = (props) => {
   // if(!props.profile) return <Preloader/>
   return (
      <div>
         <ProfileInfo profile={props.profile} />
         <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
         <MyPostsContainer />
      </div>);
};
export default Profile;