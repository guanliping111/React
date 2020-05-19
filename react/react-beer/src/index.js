import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//添加路由 react组件
import Main from './components/Main';
import About from './components/About';
import {BrowserRouter, Route} from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <div>
      {/* 添加路由 */}
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/search/:searchTerm" component={Main} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
