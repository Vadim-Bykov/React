import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ProfileStatusForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit} >
         <Field
            component="input"
            name="profileStatus"
            
         />
      </form>
   );
};

const ProfileStatusFormRedux = reduxForm({form: 'profileStatusForm'})(ProfileStatusForm)

export default ProfileStatusFormRedux;