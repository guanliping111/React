//客户端
import React from 'react';
import ReactDom from 'react-dom';
import Header from '../common/Header.jsx';

//root 节点 下面已经有东西
//客户端不需要在构造DOM 节点，只需要做服务端完成不了的 事件绑定
ReactDom.hydrate(
    <Header />,
    document.getElementById('root')
);