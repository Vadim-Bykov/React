import "./App.css";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Profile/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/Profile/News/News";
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Profile/Settings/Settings";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          {/* <Route exact path="/dialogs" component={Dialogs} /> */} 
          {/* exact покажет только точный путь без подкатологов /dialogs//1*/}
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </Router>
  );
}

export default App;
