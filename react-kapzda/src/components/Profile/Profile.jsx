// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts
            posts={props.profilePage.posts}
            postText={props.profilePage.postText}
            addPost={props.addPost}
            updatePostText={props.updatePostText}
         />
      </div>);
};
export default Profile;