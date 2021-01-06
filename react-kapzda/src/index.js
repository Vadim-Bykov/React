import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import {
//   addMessage,
//   addPost,
//   updateMessage,
//    updatePostText,
//    subscriber
// } from "./redux/state";

import store from "./redux/state";

export const renderEntireTree = (state) => {
   ReactDOM.render(
     <React.StrictMode>
       <BrowserRouter>
         <App
           state={state}
           addPost={store.addPost.bind(store)}
           updatePostText={store.updatePostText.bind(store)}
           addMessage={store.addMessage.bind(store)}
           updateMessage={store.updateMessage.bind(store)}
         />
       </BrowserRouter>
     </React.StrictMode>,
     document.getElementById("root")
   );
 };

 
renderEntireTree(store.getState());

store.subscriber(renderEntireTree);

reportWebVitals();