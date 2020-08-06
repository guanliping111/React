// import React, { useState, useRef, useEffect } from 'react';

// const { useContext } = require("react")

// 闭包 closure 副作用 useRef解决
// export const MyComponent = () => {
//     //当你调用 setState 的时候，React.js 并不会马上修改 state。
//     //而是把这个对象放到一个更新队列里面，
//     //稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新
//     const [ message, setMessage ] = useState("initial message");
//     const [seconds, setSeconds ] = useState(0);
//     const secondsRef = useRef(null);

//     useEffect(() => {
//         setTimeout(() => {
//             console.log(seconds);
//             setSeconds(1);
//             secondsRef.current = 1;
//         },1000);

//         setTimeout(() => {
//             setMessage(`Total seconds: ${secondsRef.current}`)
//         },2000)
//     },[])// [seconds] 再执行一次
//     return (
//         <>
//             <h3>{message}</h3>
//             <h4>{seconds}</h4>
//         </>
//     )
// }

// import React, {useState, useRef} from "react";

// export const MyComponent = () => {
//   const [visible, setVisible] = useState(false);
//   // mount unmount 
//   return (
//     <>
//       {visible && <MyChildComponent />}
//       <button onClick={() => setVisible(!visible)}>
//         Toggle Child component visibility: </button>
//     </>
//   )
// } 

// export const MyChildComponent = () => {
//     //列表筛选
//   const [filter, setFilter] = useState("")
//   const [userCollection, setUserCollection] = useState([])
//   const mountedRef = useRef(false);

//   const setUserCollection = userCollection => mountedRef.current 
//         && setUserCollection(userCollection);
//   useEffect(() => {
//     mountedRef.current = true;
//     return () => ( mountedRef.current = false )
//   })
//   React.useEffect(() => {
//     setTimeout(() => {
//       fetch(
//         `https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//         .then(response => response.json())
//         .then(json => setSafeUserCollection(json))
//     }, 2500)
//   }, [filter])

//   return (
//     <div>
//       <input type="text" 
//         value={filter} 
//         onChange={e => setFilter(e.target.value)}
//       />
//       <ul>
//         {
//           userCollection.map((user, index) => (
//             <li key={index}>{user.name}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// 数据在hooks 里面怎么走的
// useState -> Context(轻量) | reducer(重量) | useReducer | mobx

import React, { useReducer } from 'react'

const userInfoReducer = (state, action) => {
    switch(action.type) {
        case "setusername":
            return {
                ...state,
                // payload 子弹
                name: action.payload
            }
        case "setlastname":
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state
    }
}
export const MyComponent = () => {
    // useReducer 第一个参数 接收 reducer 函数 第二个参数 为 初始状态 是个对象
    const [reducer, dispatch] = useReducer(userInfoReducer, {
        name: "Cyclone",
        lastname : "Joker"
    })
    return (
        <>
            <h3>{reducer.name} {reducer.lastname}</h3>
            <EditUsername name={reducer.name} dispatch={dispatch}/>
            <input
                type="text"
                value={reducer.lastname}
                onChange={e=> dispatch({
                    type:'setlastname',
                    payload: e.target.value
                })
                }/>
        </>
    )
}

export const EditUsername = React.memo((props) => {
    console.log('Hey Im only rerendered when name gets updated, check React')
    return (
        <input
            type="text"
            value={props.name}
            onChange= {
                e => props.dispatch({
                    type:'setlastname',
                    payload: e.target.value
                })
            }
        />
    )
})