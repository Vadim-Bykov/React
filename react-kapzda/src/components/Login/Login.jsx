import { Field, Form, reduxForm } from "redux-form"

const LoginForm = (props) => {
   return (
      <Form onSubmit={props.handleSubmit}>
         <div>
            <Field type="text" name="login" component="input" placeholder="login"/>
         </div>
         <div>
            <Field type="text" name="password" component="input" placeholder="password"/>
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