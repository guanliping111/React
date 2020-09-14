import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import { FaceComponent } from './demo3.js';

function App() {
    //satisfactionLevel 满意度的等级 
    //我们的表情从不开心-有点开心-很开心 初始值300 
    //所有这里的setSatisfactionLevel作用并不大 因为我们不需要去修改值去做其他的事情，而是只是放一张图片在这里。
        const [satisfactionLevel, setSatisfactionLevel] = useState(300)
        return (
            <div className="App">
                <input 
                //注意代码风格
                 //input type="range" 是H5一个新特性 自定义滑动条 给他一个min=0 max=500 value={}
                    type="range" 
                    min="0" 
                    max="500" 
                    //现在我们来引入 usaState 然后解构
                    value={satisfactionLevel}
                    // + str 变为 number 因为输入框输入的是文本 然后变成number数字类型
                    onChange = {(e)=>{setSatisfactionLevel(+e.target.value)}}
                />
                <br/>
                {/* 父组件通过span 把satisfactionLevel放到这里 */}
                <span>{satisfactionLevel}</span>
                <br/>
                {/* 可以做优化 */}
                <FaceComponent level={satisfactionLevel} />
            </div>
        )
    }
const rootElement = document.getElementById('root');
ReactDom.render(<App/>, rootElement);