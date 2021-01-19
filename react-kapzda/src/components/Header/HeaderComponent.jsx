import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, setUserPhoto } from '../../redux/auth-reducer';
import axios from 'axios';

class HeaderComponent extends React.Component {

   componentDidMount() {
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
         .then(res => {
            if (res.data.resultCode === 0) {
               const { id, email, login } = res.data.data;
               this.props.setAuthUserData(id, email, login);
               console.log(id, email, login)
               axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                  .then(res=>this.props.setUserPhoto(res.data.photos.small || 'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg'));
            }
         })
         
   }



   render() {
      return <Header {...this.props} />
   } 
};

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      photo: state.auth.photo,
   }
}

export default connect(mapStateToProps, { setAuthUserData, setUserPhoto })(HeaderComponent);