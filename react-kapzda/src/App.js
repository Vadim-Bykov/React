import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/Profile/News/News";
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Profile/Settings/Settings";
import DialogsContainer from "./components/Profile/Dialogs/DialogsContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              // profilePage={props.state.profilePage}
              // dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer
              // dialogPage={props.state.dialogPage}
              // dispatch={props.dispatch}
              // updateMessage={props.updateMessage}
            />
          )}
        />
        {/* <Route exact path="/dialogs" component={Dialogs} /> */}
        {/* exact покажет только точный путь без подкатологов /dialogs/1*/}
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
