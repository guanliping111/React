import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { context, connect } from './react-redux';
import Clock from './useClock.js';

function App(props) {
  // context ? 怎么拿到 context 的值
  // 之前 connect -> mapStateToProps
  // 现在
  const context1 = useContext(context)
  console.log(context1)
  console.log(props)
  console.log(props.count)

  useEffect(() => {
    setTimeout(() => {
      props.inc();
    },2000)
  })
  return (
    <div className="App">
      count: {props.count}
      <Clock />
    </div>
  );
}
// mapStateToProps({a:1, b:2})
const mapStateToProps = (state) => {
  return {
    count: state
  }
  // 组件 this.props.count 拿到
}
const mapDispatchToProps = (dispatch) => {
  return { 
    inc: () => dispatch({type: 'INCREMENT'}),
    dec: () => dispatch({type: 'DECREMENT'})
  }
}

// connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
// 1. 拿到 mapStateToProps 的返回值();
// 2. 把 返回值 放到 <App ... props/> 
// 就是把你 store 中的 state，筛选出你自己需要的state 映射到 props
