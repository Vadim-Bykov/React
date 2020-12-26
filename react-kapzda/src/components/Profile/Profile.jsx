import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
   return (<div>
      <div>
         <img src="https://reactapp.ir/wp-content/uploads/reactjs.jpg" alt="react" />
      </div>
      <div>Avatar + description</div>
      <MyPosts/>
   </div>);
}
export default Profile;