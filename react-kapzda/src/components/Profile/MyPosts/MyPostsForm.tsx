import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/formControls/formControls";
import { FormValuesType } from "./MyPosts";

type PropsType = {

}

const maxLength = maxLengthCreator(15);

const MyPostsForm: React.FC<InjectedFormProps<FormValuesType,PropsType> & PropsType> = (props) => {

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

const MyPostsFormRedux = reduxForm<FormValuesType, PropsType>({form: 'profileMyPosForm'})(MyPostsForm)
 
export default MyPostsFormRedux;