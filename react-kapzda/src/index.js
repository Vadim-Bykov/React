import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/redux-store';
import { Provider } from 'react-redux';


// export const renderEntireTree = (state) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <BrowserRouter basename={process.env.PUBLIC_URL} >
//           <App />
//         </BrowserRouter>
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// };

// renderEntireTree(store.getState());
// // store.subscribe(() => {
// //   renderEntireTree(store.getState());
// // });

// reportWebVitals();

ReactDOM.render(<App />, document.getElementById('root'));