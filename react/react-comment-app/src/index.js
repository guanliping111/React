import React from 'react';
import ReactDOM from 'react-dom';//index.js 是入口文件
import CommentApp from './CommentApp';//模块机制
import './index.css';

ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
)