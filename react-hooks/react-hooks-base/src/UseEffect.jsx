import React, { useEffect, useState, useMemo } from 'react';
import { useCallback } from 'react';

const arr = [1, 2];
let set = new Set(); //无重复的数据集 = 数组中没有重复的数据
set.add(1); //在set尾部添加一个1
set.add(1); //{1}
console.log(set);
let set1 = new Set([1,1,1,1,1,2]);
console.log([...set1]); // ...元素 平铺展开  [1,2]

function Demo() {
    // console.log("render")
    
    const [ inputVal, setVal ] = useState('海阔天空'); //输入框内容  设置内容 数组
    const [ listVal, setList ] = useState([]);
    // const val = [1,2];
    //缓存的时候检查依赖，只有依赖没有变化才会使用上次的值
    const val = useMemo(() => [1,2], []);
    set.add(val);
    console.log(set.size); //3

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