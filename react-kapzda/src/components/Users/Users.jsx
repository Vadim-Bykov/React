import axios from 'axios';
import User from './User/User';
// import style from './Users.module.css'

const Users = (props) => {
   if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res=>props.setUsers(res.data.items))
      // props.setUsers([
      //    {
      //       id: 1,
      //       photoUrl: "https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg",
      //       followed: true,
      //       fullName: "Vadim",
      //       status: "I'm a boss",
      //       location: {
      //          city: "Mogilev",
      //          country: "Belarus",
      //       },
      //    },
      //    {
      //       id: 2,
      //       photoUrl: "https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg",
      //       followed: false,
      //       fullName: "Tanya",
      //       status: "I'm a boss",
      //       location: {
      //          city: "Moscow",
      //          country: "Russia",
      //       },
      //    },
      //    {
      //       id: 3,
      //       photoUrl: "https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg",
      //       followed: true,
      //       fullName: "Eva",
      //       status: "I'm a boss",
      //       location: {
      //          city: "Brest",
      //          country: "Belarus",
      //       },
      //    },
      //    {
      //       id: 4,
      //       photoUrl: "https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg",
      //       followed: false,
      //       fullName: "Slava",
      //       status: "I'm a boss",
      //       location: {
      //          city: "Mogilev",
      //          country: "Belarus",
      //       },
      //    },
      // ])
   };

   return props.users.map(u => <User
      id={u.id}
      photos={u.photos}
      followed={u.followed}
      unfollow={props.unfollow}
      follow={props.follow}
      name={u.name}
      status={u.status}
      // location={u.location}
      key={u.id}
   />)

   // return (<div>
   //    {
   //       props.users.map(u => {
   //          return <div key={u.id}>
   //             <div>
   //                <div>
   //                   <img src={u.photoUrl} className={style.usersPhoto} />
   //                </div>
   //                <div>
   //                   {u.followed
   //                      ? <button onClick={() => props.unfollow(u.id)}>Follow</button>
   //                      : <button onClick={() => props.follow(u.id)}>Unfollow</button>}
                     
   //                </div>
   //             </div>

   //             <div>
   //                <div>
   //                   <p>{u.fullName}</p>
   //                   <p>{u.status}</p>
   //                </div>
   //                <div>
   //                   <p>{u.location.country}</p>
   //                   <p>{u.location.city}</p>
   //                </div>
   //             </div>
   //          </div>
   //       })
   //    }
   // </div>);
};

export default Users;