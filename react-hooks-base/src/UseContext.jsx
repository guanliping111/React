import React, { createContext, useState, useEffect, useContext, useRef } from 'react';
//跨层级传递数据
const context = createContext({
    theme: 'red'
})
//生产者 消费者
function P() {
    let [obj, setTheme] = useState({theme: 'red'});
    useEffect(() => {
        setTimeout(() => {
            setTheme({
                theme: 'blue'
            })
        },3000)
    },[]);
    return (
        <context.Provider value={obj}>
            <Child a="1"/>
        </context.Provider>
    )
}
function Child() { 
    // console.log('render1');
    return (
        <Son />
    )
}
function Son() {
    // console.log('render2');
    const ref = useRef();
    // 最近的context
    const value = useContext(context);
    useEffect(() => {
        console.log(ref.current)
    },[])
    return (
    <p>
        54543
        <h2 style={{color: value.theme}}
            ref={ref}
        >h2</h2>
     
        {/* <context.Consumer>
            {
                (value) => {
                    return (
                        <h2 style={{color: value.theme}}>h2</h2>
                    )
                }
            }
        </context.Consumer> */}
    </p>
    )
}
export default P;