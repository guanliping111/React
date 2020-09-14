//客户端
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from '../common/Header/Header.jsx';
import route from '../route';

function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            { renderRoutes(route) }
        </BrowserRouter>
        
    )
}
//root 节点 下面已经有东西
//客户端不需要在构造DOM 节点，只需要做服务端完成不了的 事件绑定
ReactDom.hydrate(
    <App />,
    document.getElementById('root')
);