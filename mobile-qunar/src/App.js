import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import { useCallback } from 'react';
import { connect } from 'react-redux';
// import Journey from '../../qunar/src/components/journey/Journey';

function App(props) {
  // console.log(props);
  const {
    from,
    to
  } = props;;
  const onBack = useCallback(() => {
    window.history.back();
  },[]);
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票"  onBack={onBack}/>
      </div>
      <form action="./query.html" className="form">
        {/* <Journey from={from} to={to} /> */}
      </form>
    </div>
  );
}

export default connect(function mapStateToProps(state){
  //状态的读操作
  return state;
},)(App);
// export default App;
