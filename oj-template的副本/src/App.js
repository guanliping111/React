import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//数据跟组件是分离的
import axios from 'axios';
import './mock/data.js';

// class Dog extends Component {
//   constructor() {
//     super()
//     this.state = { 
//       isRunning: false,
//       isBarking: false
//     }
//   }
//   bark() {
//     this.setState = {
//       isBarking : true
//     }
//     console.log("bark");
//   }
//   run() {
//     this.setState = {
//       isRunning : true
//     }
//     console.log("run");
//   }
//   barkAndrun() {
//     this.bark();
//     this.run();
//     setTimeout(() => {
//       this.setState = ({
//         isBarking : true,
//         isRunning : true
//       }, () => {
//         console.log("不叫了，停下来了")
//       });
//     },2000)
//   }
//   render() { 
//     return (  
//       <div onClick={this.barkAndrun.bind(this)}>
//         Dog
//       </div>
//     );
//   }
// }

// class Poem extends Component {
//   computer() {
//     console.log(this.p.offsetHeight);
//     console.log(this.p.clientHeight);
//   }
//   componentDidMount() {
//     this.computer();
//   }
//   render() { 
//     const { content } = this.props;
//       return ( 
//         <p ref={(p) =>  this.p = p }>
//             {content}
//         </p> 
//       );
//   }
// }

// // class Notification extends Component {
// //   render() { 
// //     const message_count = getNotificationCount();
// //     return message_count>0?<span>有({message_count})条未读消息</span>:<span>99+</span>;
// //   }
// // }

// function App() {
//   return (
//     <div className="App">
//       {/* <Notification /> */}
//       <Dog />
//       <Poem content="我是天空里的一片云，
//                     偶然投影在你的波心
//                     你不必讶异，更无须欢喜，
//                     在转瞬间消灭了踪影。
//                     你我相逢在黑夜的海上，
//                     你有你的，我有我的，方向；
//                     你记得也好，最好你忘掉，
//                     在这交会时互放的光亮！"
//       />
//     </div>
//   );
// }


// JSX UI state MVVM 

//函数的返回值是组件
//  /posts/ axios api url   /comments/
//Post  组件作为参数 
//通用性的提供数据请求及更新的解决方案
//有人为他服务
class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    )
  }
}


const loadAndRefresh = (url) => (WrappedComponent) => {
  // 返回组件
  return class extends Component {
    constructor() {
      super()
      this.state = 
      { 
        msg: '',
        content: ''
      }
    }
    componentDidMount() {
      // 数据请求 
      this._loadData();
    } 
    async _loadData() {
      this.setState({
        msg: '数据加载中...'
      });
      axios.get(url)
      .then(res => {
        // console.log(res.data);
        this.setState({
          msg: res.data.title,
          content: res.data.content
        })
      })
    }

    render() {
      const props = {
        msg: this.state.msg,
        content: this.state.content
      }
      return (
        <WrappedComponent {...props} />
      )
    }
  }
}
//复用
const WrappedPost = loadAndRefresh('/posts/')(Post);
const WrappedComment = loadAndRefresh('/comments/')(Comment);

function App() {
  return (
    <div className="App">
      {/* message  */}
      {/* <Post/> */}
      <WrappedPost />
      <WrappedComment />
    </div>
  );
}


export default App;
