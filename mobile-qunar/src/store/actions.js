export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'SET_TO';

export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from,
    }
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to,
    }
}

export function exchangeFromTo() {
    // 1.两个action都要调用
    // 2. payload传值
    //3.getState 拿值
    return (dispatch, getState) =>{
        const { from, to } = getState();
        dispatch(setFrom(to))
        dispatch(setTo(from))
    }
}

