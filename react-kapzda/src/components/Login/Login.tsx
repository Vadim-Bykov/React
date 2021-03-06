import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, InjectedFormProps, reduxForm } from 'redux-form';
// import { authAPI } from "../../API/api";
import { login } from '../../redux/auth-reducer';
import { maxLengthCreator, required } from '../../utils/validators';
import { createField, Input } from '../common/formControls/formControls';
import style from '../common/formControls/formControls.module.css';
import { AppStateType } from '../../redux/redux-store';
import { type } from 'node:os';

type LoginFormOwnProps = {
  captchaUrl: string | null;
  loginInProgress: boolean;
};

const maxLength = maxLengthCreator(20);

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, loginInProgress, captchaUrl }) => {
  return (
    <Form onSubmit={handleSubmit}>
      {createField<FormKeysType>([required, maxLength], 'email', Input, 'Enter email', {
        type: 'text',
      })}
      {createField<FormKeysType>([required, maxLength], 'password', Input, 'Enter password', {
        type: 'password',
      })}
      {createField<FormKeysType>(
        [],
        'rememberMe',
        Input,
        '',
        { type: 'checkbox' },
        'Remember me'
      )}

      {/* <div>
            <Field validate={[required, maxLength]} type="text" name="email" component={Input} placeholder="email" />
         </div>
         <div>
            <Field validate={[required, maxLength]} type="password" name="password" component={Input} placeholder="password" />
         </div>
         <div>
            <Field type="checkbox" component="input" name="rememberMe" /> Remember me
         </div> */}

      {captchaUrl && <img src={captchaUrl} alt='captcha' />}
      {captchaUrl &&
        createField([required], 'captcha', Input, 'Enter symbols', {
          type: 'text',
        })}

      {error && <div className={style.formError}>{error}</div>}
      <div>
        <button disabled={loginInProgress}>Login</button>
      </div>
    </Form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: 'login',
})(LoginForm);

type MapStatPropsType = {
  isAuth: boolean;
  captchaUrl: string | null;
};

type MapDispatchType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string
  ) => void;
  loginInProgress: boolean;
};

type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type FormKeysType = Extract<keyof LoginFormValuesType, string>;

const Login: React.FC<MapStatPropsType & MapDispatchType> = ({
  login,
  isAuth,
  loginInProgress,
  captchaUrl,
}) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    // console.log(formData)
    const { email, password, rememberMe, captcha } = formData;
    login(email, password, rememberMe, captcha);
  };

  if (isAuth) {
    return <Redirect to='/profile' />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm
        onSubmit={onSubmit}
        loginInProgress={loginInProgress}
        captchaUrl={captchaUrl}
      />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    loginInProgress: state.auth.loginInProgress,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, { login })(Login);
