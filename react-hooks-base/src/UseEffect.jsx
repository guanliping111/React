import React, { useEffect, useState, useMemo } from 'react';
import { useCallback } from 'react';

function Demo() {
    // console.log("render")
    const arr = [1, 2];
    const [ inputVal, setVal ] = useState('海阔天空'); //输入框内容  设置内容 数组
    const [ listVal, setList ] = useState([]);
    // const val = [1,2];
    const val = useMemo(() => arr);
    console.log(val === arr); //true

    const handleChange = useCallback((event) => {
        setVal(event.target.value);
    })
    useEffect(() => {
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + inputVal)
        .then(res => res.json())
        .then((res) => {
            setList(res.result.songs);
        })
        return() => {
            //卸载
            // clearInterval()
            // document.removeEventListener()
        }
    },[]) //空数组  [依赖]
    // [1,2,3] //传入依赖项
    //依赖 react 检查 依赖里面有没有数据发生变化，没变化就不会发生调用
    //[] 空数组 一次 componentDidMount
    //[inputVal] 多次 componentDidUpdate

    return (
        <div>
            {listVal.length}
            <input type="text" value= {inputVal} onChange={handleChange} />
        </div>
    )
}
// () => {
//   const val = [1,2]
//   const handleChange = () => {}
// }
// () => {
//   const val = 
//   const handleChange = 
// }

export default Demo;