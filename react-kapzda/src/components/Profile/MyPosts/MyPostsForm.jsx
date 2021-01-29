import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/formControls/formControls";

const maxLength = maxLengthCreator(15);

const MyPostsForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <Field
            name='myPostForm'
            component={Textarea}
            placeholder="Enter new post"
            validate={[required, maxLength]}
         />
         <div>
            <button type="submit">Add post</button>
         </div>
      </form>
   );
}

const MyPostsFormRedux = reduxForm({form: 'profileMyPosForm'})(MyPostsForm)
 
export default MyPostsFormRedux;