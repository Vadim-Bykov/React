import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/redux-store";
import { Provider } from "react-redux";

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App
            // state={state} dispatch={store.dispatch.bind(store)}
          />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

console.log(store);
renderEntireTree(store.getState());
store.subscribe(() => {
  renderEntireTree(store.getState());
});

reportWebVitals();
