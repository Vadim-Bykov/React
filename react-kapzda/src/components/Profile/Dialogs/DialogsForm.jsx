import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/formControls/formControls";

const maxLength = maxLengthCreator(30);

const DialogsForm = (props) => {
  
   return (
      <form onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            name="dialogForm"
            placeholder="Enter your message"
            validate={[required, maxLength]}
         />
         <div>
            <button type="submit" >Add message</button>
         </div>
      </form>
   );
};

const DialogsFormRedux = reduxForm({form: 'dialogsForm'})(DialogsForm);

export default DialogsFormRedux;