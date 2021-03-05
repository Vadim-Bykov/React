import './App.css';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Profile/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
// import { getAuthUserData } from './redux/auth-reducer';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';
import WithSuspense from './components/HOC/withSuspense';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Profile/Dialogs/DialogsContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Profile/Dialogs/DialogsContainer'));

class MainComponent extends React.Component {

  catchAllPromiseErrors(e) {
    // console.log(e.promise, e.reason)
    alert('Some error occurred')
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllPromiseErrors);
  }
  
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllPromiseErrors);
  }

  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className='app-wrapper'>
        <HeaderComponent />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/profile' />} />
            <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)} />
            <Route path='/dialogs' render={WithSuspense(DialogsContainer)} />
            {/* <Route exact path="/dialogs" component={Dialogs} /> */}
            {/* exact покажет только точный путь без подкаталогов /dialogs/1*/}
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/users' render={() => <UsersContainer pageTitle='Samurai' />} />
            {/* Точные адреса вставляются выше /login/facebook чем /login со <Switch></Switch> без exact*/}
            <Route path='/login/facebook' render={() => <div>facebook</div>} />
            <Route path='/login' render={() => <Login />} />
            {/* <Route exact path='/login' render={() => <Login />} /> */}
            <Route path='*' render={() => <h1>404 NOT FOUND</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const MainComponentContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(MainComponent);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainComponentContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
