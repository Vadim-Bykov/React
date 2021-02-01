import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/redux-store';
import { Provider } from 'react-redux';

// setInterval(() => {
//   store.dispatch({ type: 'fake' });
// }, 1000);

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());
// store.subscribe(() => {
//   renderEntireTree(store.getState());
// });

reportWebVitals();
