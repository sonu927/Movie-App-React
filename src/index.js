import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//curry function form of function(obj,next,action){}
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware Code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('ACTION_TYPE = ', action.type);
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Store', store);
console.log('Before State', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
