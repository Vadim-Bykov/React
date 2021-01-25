import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';
const Profile = (props) => {
   return (
      <div>
         <ProfileInfo profile={props.profile} />
         <ProfileStatus status="Hello my friend!" />
         <MyPostsContainer />
      </div>);
};
export default Profile;