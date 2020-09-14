import React from 'react';
import ReactDOM from 'react-dom';
//数据管理模式
//创建store 中央仓库 数据管理的架构
//creactStore comments 放到中央仓库里
import { createStore } from 'redux'; //数据管理
import { Provider } from 'react-redux'; //Provider 组件提供
import CommentApp from './containers/CommentApp';
import commentsReducer from './reducers/comments';

//仓库 单一状态树
const store = createStore(commentsReducer);

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
)
