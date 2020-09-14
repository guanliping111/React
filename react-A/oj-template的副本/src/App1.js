import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Dog extends Component {
  constructor() {
    super()
    this.state = { 
      isRunning: false,
      isBarking: false
    }
  }
  bark() {
    this.setState = {
      isBarking : true
    }
    console.log("bark");
  }
  run() {
    this.setState = {
      isRunning : true
    }
    console.log("run");
  }
  barkAndrun() {
    this.bark();
    this.run();
    setTimeout(() => {
      this.setState = ({
        isBarking : true,
        isRunning : true
      }, () => {
        console.log("不叫了，停下来了")
      });
    },2000)
  }
  render() { 
    return (  
      <div onClick={this.barkAndrun.bind(this)}>
        Dog
      </div>
    );
  }
}

class Poem extends Component {
  computer() {
    console.log(this.p.offsetHeight);
    console.log(this.p.clientHeight);
  }
  componentDidMount() {
    this.computer();
  }
  render() { 
    const { content } = this.props;
      return ( 
        <p ref={(p) =>  this.p = p }>
            {content}
        </p> 
      );
  }
}

// class Notification extends Component {
//   render() { 
//     const message_count = getNotificationCount();
//     return message_count>0?<span>有({message_count})条未读消息</span>:<span>99+</span>;
//   }
// }

function App1() {
  return (
    <div className="App1">
      {/* <Notification /> */}
      <Dog />
      <Poem content="我是天空里的一片云，
                    偶然投影在你的波心
                    你不必讶异，更无须欢喜，
                    在转瞬间消灭了踪影。
                    你我相逢在黑夜的海上，
                    你有你的，我有我的，方向；
                    你记得也好，最好你忘掉，
                    在这交会时互放的光亮！"
      />
    </div>
  );
}

function App1() {
  return (
    <div className="App1">
      {/* message  */}
      {/* <Post/> */}
      {/* <WrappedPost />
      <WrappedComment /> */}
    </div>
  );
}


export default App1;
