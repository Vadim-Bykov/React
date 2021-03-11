import { InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { createField, Textarea } from "../../common/formControls/formControls";
import { DialogFormValuesType } from "./Dialogs";

const maxLength = maxLengthCreator(30);

type FormKeysType = Extract<keyof DialogFormValuesType, string>;
type FormOwnPropsType = {};

const DialogsForm: React.FC<InjectedFormProps<DialogFormValuesType, FormOwnPropsType> & FormOwnPropsType> = (props) => {
  
   return (
      <form onSubmit={props.handleSubmit}>
         {createField < FormKeysType > (
            [required, maxLength],
            'dialogForm',
            Textarea,
            'Enter your message',
            {
               type: 'text',
            }
         )}

         {/* <Field
            component={Textarea}
            name="dialogForm"
            placeholder="Enter your message"
            validate={[required, maxLength]}
         /> */}
         <div>
            <button type="submit" >Add message</button>
         </div>
      </form>
   );
};

const DialogsFormRedux = reduxForm<DialogFormValuesType, FormOwnPropsType>({form: 'dialogsForm'})(DialogsForm);

export default DialogsFormRedux;