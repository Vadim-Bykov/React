import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, reduxForm } from "redux-form"
// import { authAPI } from "../../API/api";
import { login } from "../../redux/auth-reducer";
import { maxLengthCreator, required } from "../../utils/validators";
import { createField, Input } from "../common/formControls/formControls";
import style from '../common/formControls/formControls.module.css'
import { toggleLoginInProgress } from "../../redux/auth-reducer";


const maxLength = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error, loginInProgress}) => {
   return (
      <Form onSubmit={handleSubmit}>
         
         {createField([required, maxLength], "email", Input, "Enter email", {type:"text"})}
         {createField([required, maxLength], "password", Input, "Enter password", {type:"password"})}
         {createField([], "rememberMe", "input", "", { type: "checkbox" }, "Remember me")}
         
         {/* <div>
            <Field validate={[required, maxLength]} type="text" name="email" component={Input} placeholder="email" />
         </div>
         <div>
            <Field validate={[required, maxLength]} type="password" name="password" component={Input} placeholder="password" />
         </div>
         <div>
            <Field type="checkbox" component="input" name="rememberMe" /> Remember me
         </div> */}
         { error &&
            <div className={style.formError}>
               {error}
            </div>
         }
         <div>
            <button disabled={loginInProgress}>Login</button>
         </div>
      </Form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({login, isAuth, loginInProgress}) => {
   
   const onSubmit = (formData) => {
      // console.log(formData)
      const {email, password, rememberMe} = formData
      login(email, password, rememberMe)
   }

   if (isAuth) {
     return <Redirect to="/profile" />
   }

   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit} loginInProgress={loginInProgress} />
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      loginInProgress: state.auth.loginInProgress,
   }
}

export default connect(mapStateToProps, {login, toggleLoginInProgress} )(Login);