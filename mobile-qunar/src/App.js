import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import Journey from './components/journey/Journey';
import { bindActionCreators } from 'redux';
import { exchangeFromTo }from './store/actions';

function App(props) {
  console.log(props);
  const { from, to, dispatch } = props; //解构
  const onBack = useCallback(() => {
    window.history.back();
  },[]); // [] 清空数组
  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo
    },dispatch)  //派遣 reducer接收
  },[])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票"  onBack={onBack}/>
      </div>
      <form action="./query.html" className="form">
        <Journey from={from} to={to} {...cbs}/>
      </form>
    </div>
  );
}

export default connect(function mapStateToProps(state){
  //状态的读操作
  return state; //返回当前状态
  },function mapDispatchToProps(dispatch) {
    return {
      dispatch
    }
})(App);
// export default App;
