import { Field, Form, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../common/formControls/formControls";

const maxLength = maxLengthCreator(10);

const LoginForm = (props) => {

   return (
      <Form onSubmit={props.handleSubmit}>
         <div>
            <Field validate={[required, maxLength]} type="text" name="login" component={Input} placeholder="login"/>
         </div>
         <div>
            <Field validate={[required, maxLength]} type="text" name="password" component={Input} placeholder="password"/>
         </div>
         <div>
            <Field type="checkbox" component="input" name="rememberMe" /> Remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </Form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {
   
   const onSubmit = (formData) => {
      console.log(formData)
   }

   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}

export default Login;