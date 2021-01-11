// import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
   return (
      <div>
         <ProfileInfo />
         <MyPostsContainer
            // posts={props.profilePage.posts}
            // postText={props.profilePage.postText}
            // dispatch={props.dispatch}
            // updatePostText={props.updatePostText}
         />
      </div>);
};
export default Profile;