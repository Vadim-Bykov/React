import { reduxForm } from 'redux-form';
import { Input, Textarea, createField } from '../../common/formControls/formControls';
import style from '../../common/formControls/formControls.module.css'
// import s from './ProfileInfo.module.css';


const ProfileDataForm = ({ profile, handleSubmit, error }) => {
   return (
      <form onSubmit={handleSubmit}>
         
         <div><b>full Name:</b>{createField([], 'fullName', Input, 'Write full Name')}</div>

         <div><b>Looking For A Job:</b>{createField([], 'lookingForAJob', Input, '', { type: 'checkbox' })}
         </div>

         <div><b>Skills:</b>{createField([], 'lookingForAJobDescription', Textarea, 'Write Skills')}</div>

         <div><b>about Me:</b>{createField([], 'aboutMe', Textarea, 'Write about Me')}</div>

         <div><b>contacts:</b> {Object
            .keys(profile.contacts)
            .map(key => {
               return <div key={key}>
                  {createField([], `contacts.${key}`, Input, key)}
               </div>
            })}
         </div>
         { error &&
            <div className={style.formError}>
               {error}
            </div>
         }
         <div><button>save</button></div>
      </form>
   );
}

const ReduxProfileDataForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ReduxProfileDataForm;