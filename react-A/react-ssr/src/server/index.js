import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import path from 'path';
import { renderToString } from 'react-dom/server';
import route from '../route'
// 如果是客户端 reactDom.render( </>, root)
// 服务端 renderToString 
// <Header/>
// import Header from '../common/Header/Header.jsx'
const app = express();
//把 public 映射成静态文件的目录
app.use(express.static('public'))

app.get('*',(req, res) => {
    // const root = <Header />
    console.log(req.url)
    const root = (
        <StaticRouter location={req.url}>
            { renderRoutes(route) }
        </StaticRouter>
    )

    //把 vnode -> html string
    //有事件 addEventListener (浏览器自带的API)
    const htmlStr = renderToString(root);
    console.log(htmlStr);
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
            <div id="root">${htmlStr}</div>
            <script src="./index.js"></script>
        </body>
        </html>
    `)
});

app.listen(3000, () => {
    console.log('server is running 3000');
})