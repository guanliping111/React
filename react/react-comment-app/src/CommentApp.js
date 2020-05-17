import React, { Component } from 'react';//按需加载 es6 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';
//解构
//let {a} = {a: 1, b: 2, c: 3} 

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments:[
                {username: '小小',
                 content: '不好玩'
                },
                {username: '管管',
                 content: '天天敲代码'
                },
               ]
        }
    }
    render() {//接口
        const { comments } = this.state;
        return (
            <div className="wrapper">
                {/* onSubmit  */}
                {/* react组件
                    1. render:负责页面输出   state：内部数据  props:外部数据
                 */}
                  {/* 父组件CommentApp的的子组件CommentInput CommentList */}
               <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/> 
               {/* 
               用户新提交了评论怎么办？
               CommentList：1.静态页面  2.动态化， state、props、  显示评论列表 */}
               <CommentList b="2" comments={comments}/>
            </div>
        )
    }
    handleSubmitComment(comment) {
        //console.log(comment);
        // let {comments} = this.state;
        // comments.unshift(comment);//移除
        // console.log(comments,"++++++");
        // this.setState({//动态编程 插入内容到页面 修改状态
        //     //key:value
        //     comments:comments
        // })
        this.setState({
            comments: [comment, ...this.state.comments]//展开运算符
        })
    }
}

export default CommentApp;