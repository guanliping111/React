import React, { createRef, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import ReqDemo from './ReqDemo.js'

function App() {
  const ref = createRef();
  console.log(ref.current)
  return (
    <div>
      {/* catch() { xxxxx } */}
     <Suspense fallback={<h2>正在加载中...</h2>}>
        {/* throw Promise */}
        {/*  错误监控 sentry */}
        <ReqDemo key={123} className={'foo'} ref={ref}/>
     </Suspense>
    </div>
  );
}

export default App;
