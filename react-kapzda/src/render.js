import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost, updatePostText } from "./redux/state";

export const renderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
            <App
               state={state}
               addPost={addPost}
               updatePostText={updatePostText}
            />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );
    
}

reportWebVitals();
