// import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {
   return (
      <div>
         <ProfileInfo />
         <MyPostsContainer />
      </div>);
};
export default Profile;