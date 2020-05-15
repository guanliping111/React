import React, { Component } from 'react';//按需加载 es6 解构

class CommentInput extends Component {
    constructor() {//构造函数
        super();//父类的构造函数先执行
        this.state = {//状态 
            username: '',
            content: ''
        }
    }
    render() {
        //react jsx {js 动态区域}
        //尝试 es6解构方式， 从this.state 解出来 username content 两个量
        let {username, content} = this.state;
        return(
            <div>
              <div className="comment-input">
                  <div className="comment-filed">
                      <span className="comment-filed-name">用户名：</span>
                      <div className="comment-filed-input">
                          <input type="text" value={username}
                          onChange={this.handleUsernameChange.bind(this)}//onChange事件
                          />
                        </div>
                  </div>
                  <div className="comment-filed">
                      <span className="comment-filed-name">评论内容</span>
                      <div className="comment-filed-input">
                          <textarea value={content}
                          onChange={this.handleContentChange.bind(this)}
                          ></textarea></div>
                  </div>
              </div>
              <div className="comment-filed-button"></div>
              <button onClick={this.handleSubmit.bind(this)}>发布</button>
            </div>
        )
    }
    handleUsernameChange(event) {
       // console.log(event);
       this.setState({//修改值
           username: event.target.value
       })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
     }
     handleSubmit(event) {
         //console.log(this.state);
         const {username, content} = this.state;
         this.props.onSubmit({username,content})
         this.setState({
             content:''
         })
     }
}
export default CommentInput;