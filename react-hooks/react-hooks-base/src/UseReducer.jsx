import React, { useReducer,useCallback } from 'react';

//初始化
const initState = {
    count : 0
}
function reducer(state = initState, action) {
    switch(action.type) {
        case 'ADD':
            return {count: state.count + 1}
        case 'REDUCE':
            return {count: state.count - 1}
        default:
            return state;
    }
}
function Counter() {
    //创建 store 要初始化 count
    const [store, dispatch] = useReducer(reducer,{count : 0});
    const handleAdd = useCallback(() => {
        dispatch({type: 'ADD'})
    },[])
    const handleRuducer = useCallback(() => {
        dispatch({type: 'REDUCE'})
    })
    return (
        <div>
            count: {store.count}
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRuducer}>-</button>
        </div>
    )
}
export default Counter;