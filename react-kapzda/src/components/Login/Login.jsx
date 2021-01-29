import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, Form, reduxForm } from "redux-form"
// import { authAPI } from "../../API/api";
import { login } from "../../redux/auth-reducer";
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../common/formControls/formControls";
import style from '../common/formControls/formControls.module.css'


const maxLength = maxLengthCreator(20);

const LoginForm = (props) => {
   
   return (
      <Form onSubmit={props.handleSubmit}>
         <div>
            <Field validate={[required, maxLength]} type="text" name="email" component={Input} placeholder="email" />
         </div>
         <div>
            <Field validate={[required, maxLength]} type="password" name="password" component={Input} placeholder="password" />
         </div>
         <div>
            <Field type="checkbox" component="input" name="rememberMe" /> Remember me
         </div>
         { props.error &&
            <div className={style.formError}>
               {props.error}
            </div>
         }
         <div>
            <button>Login</button>
         </div>
      </Form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
   
   const onSubmit = (formData) => {
      // console.log(formData)
      const {email, password, rememberMe} = formData
      props.login(email, password, rememberMe)
   }

   if (props.isAuth) {
     return <Redirect to="/profile" />
   }

   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, {login} )(Login);