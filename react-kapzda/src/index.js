import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  addMessage,
  addPost,
  updateMessage,
   updatePostText,
   subscriber
} from "./redux/state";

import state from "./redux/state";
// import { renderEntireTree } from "./render";

export const renderEntireTree = (state) => {
   ReactDOM.render(
     <React.StrictMode>
       <BrowserRouter>
         <App
           state={state}
           addPost={addPost}
           updatePostText={updatePostText}
           addMessage={addMessage}
           updateMessage={updateMessage}
         />
       </BrowserRouter>
     </React.StrictMode>,
     document.getElementById("root")
   );
 };

 
renderEntireTree(state);

subscriber(renderEntireTree);

reportWebVitals();