import React, { useEffect, useRef } from 'react';
import pullToRefresh from './pullDown';
import logo from './logo.svg';
import './App.css';
const { init } = pullToRefresh()

function App() {
  const contentRef = useRef();
  const ptrRef = useRef();
  const bodyRef = useRef();
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      ptrEl: ptrRef.current,
      bodyEl: bodyRef.current,
      loadingFunction: () => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        },3000)
      })
    });
  }, [])
  return (
    <div className="body-wrap">
      {/* loading区  ptr-wrap 负责移动 */}
      <div ref={ptrRef} className="ptr-wrap">
        {/* 负责动画 */}
        <div className="loading"></div>
      </div>
      {/* 内容区 */}
      <header ref={contentRef} className="content-wrap">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;