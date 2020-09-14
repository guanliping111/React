import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer
)
console.log(store.getState().cart);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
