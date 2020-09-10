let action1 = {
    type: 'INCREMENT'
}
let action2 = {
    type: 'DECREMENT'
}
//状态
function reducer(state = 1, action) {
    if (action.type === 'INCREMENT') {
      return state + 1
    } else if (action.type === 'DECREMENT') {
      return state - 1;
    } else {
      return state;
    }
} 

let store = createStore(reducer);
store.dispatch(action1);
console.log(store.getState());

//源码
//洋葱模型
function createStore(reducer) {
    let state = undefined;
    function dispatch(action) {
        state = reducer(state, action);
    }
    dispatch({type: ''}); //state 为reducer 那里的 默认值
    function getState() {
        return state;
    }
    return {
        dispatch, getState
    }
}