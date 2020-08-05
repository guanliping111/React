import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { FaceComponent } from "./demo";

function App() {
  const [satisfactionLevel, setSatisfactionLevel] = useState(300);
  return (
    <div className="App">
      <input 
        type="range" //自定义滑动条输入框
        min="0" 
        max="500" 
        value={satisfactionLevel}
        onChange={(event) => {
            satisfactionLevel(+event.target.value)
        }}
       />
      <br/>
      <span>{satisfactionLevel}</span>
      <br/>
      {/* 可以做优化 */}
      <FaceComponent level={satisfactionLevel} />
    </div>
  )
  
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);