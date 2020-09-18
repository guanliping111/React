import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Header from '../common/Header';

const app = express();
//把 public 映射成静态文件的目录
app.use(express.static('public'))
// get 定义一个路由 * 任意一个路由
app.get('*',(req, res) => {
    Header.loadDate().then(r => {
        const htmlStr = renderToString(<Header />);
        //返回html
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
                <script>window.songs = ${JSON.stringify(r.data)}</script>
                <script src="./index.js"></script>
            </body>
            </html>
        `)
    })
});

//服务端 渲染react
app.listen(9090, () => {
    console.log('server is running 9090');
})