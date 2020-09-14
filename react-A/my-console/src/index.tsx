import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';

//arguments 是一个对应于 传递参数给函数 的类数组对象。
type originConsole = (...args: any[]) => void;
//保存原来的方法 
let originConsole: originConsole = console.log;
//修改它
console.log = function(...args:any[]) {
  // alert("called");
  originConsole.apply(window.console, args);
}
console.log(1);

//如何监听 数组 push 这个行为
let arr = [1,2,3];
let originPush = Array.prototype.push; //保存原来的方法 
Array.prototype.push = function(...items:any[]) {
  console.log("push 发生了",items);
  //恢复原来的方法
  return originPush.apply(this, items);
}
arr.push(4);//push 发生了

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
