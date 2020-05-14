import React, { Component } from 'react';//按需加载 es6 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';
//解构
//let {a} = {a: 1, b: 2, c: 3}

class CommentApp extends Component {
    rend() {//接口
        return (
            <div>
               <CommentInput />,
               <CommentList />,
            </div>
        )
    }
}

export default CommentApp;