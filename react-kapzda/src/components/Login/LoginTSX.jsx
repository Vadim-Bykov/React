// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { Form, reduxForm } from "redux-form"
// // import { authAPI } from "../../API/api";
// import { login } from "../../redux/auth-reducer";
// import { maxLengthCreator, required } from "../../utils/validators";
// import { createField, Input } from "../common/formControls/formControls";
// import style from '../common/formControls/formControls.module.css'
// import { toggleLoginInProgress } from "../../redux/auth-reducer";
// import { type } from "os";
// import { AppStateType } from "../../redux/redux-store";

// type PropsTypeForm = {
//    handleSubmit: () => void
//    error?: boolean
//    loginInProgress: boolean
//    captchaUrl: string
// }

// const maxLength = maxLengthCreator(20);

// const LoginForm: React.FC<PropsTypeForm> = ({handleSubmit, error, loginInProgress, captchaUrl}) => {
//    return (
//       <Form onSubmit={handleSubmit}>
         
//          {createField([required, maxLength], "email", Input, "Enter email", {type:"text"})}
//          {createField([required, maxLength], "password", Input, "Enter password", {type:"password"})}
//          {createField([], "rememberMe", "input", "", { type: "checkbox" }, "Remember me")}
         

//          {captchaUrl && <img src={captchaUrl} alt='captcha' />}
//          {captchaUrl && createField([required], "captcha", Input, "Enter symbols", {type:"text"})}

//          { error &&
//             <div className={style.formError}>
//                {error}
//             </div>
//          }
//          <div>
//             <button disabled={loginInProgress}>Login</button>
//          </div>
//       </Form>
//    )
// }


// type FormDataType = {
//    email: string
//    password: string
//    rememberMe?: boolean
//    loginInProgress: boolean
// }

// // type OwnPropsFormType = {
// //    loginInProgress: boolean
// // }

// const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm);


// type MapStatePropsType = {
//    isAuth: boolean
//    loginInProgress: boolean
//    captchaUrl: string | null
// }

// type MapDispatchPropsType = {
//    login: (email: string, password: string, rememberMe: string, captcha: string)=>void
// }

// type PropsTypeLogin = MapStatePropsType & MapDispatchPropsType;


// const Login: React.FC<PropsTypeLogin> = ({login, isAuth, loginInProgress, captchaUrl}) => {
   
//    const onSubmit = (formData: any) => {
//       // console.log(formData)
//       const {email, password, rememberMe, captcha} = formData
//       login(email, password, rememberMe, captcha)
//    }

//    if (isAuth) {
//      return <Redirect to="/profile" />
//    }

//    return (
//       <div>
//          <h1>LOGIN</h1>
//          <LoginReduxForm onSubmit={onSubmit} loginInProgress={loginInProgress} captchaUrl={captchaUrl} />
//       </div>
//    )
// }

// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//    return {
//       isAuth: state.auth.isAuth,
//       loginInProgress: state.auth.loginInProgress,
//       captchaUrl: state.auth.captchaUrl,
      
//    }
// }

// export default connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps, {login, toggleLoginInProgress} )(Login);