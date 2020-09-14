export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'ACTION_SET_IS_CITY_SELECTOR_VISIBLE';
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA';

export function showCitySelector() {
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload: true,
    }
}
//对ACTION_SET_CITY_DATA 设置一个action
export function FetchCityData() {
    //异步操作 返回一个函数
    return (dispatch, getState) => {
        fetch('./rest/cities')
            .then(res => res.json)
            .then(cityData => {
            dispatch(setCityData(cityData))
        })
    }
}

export function setCityData(cityData) {
    return {
        
    }
}
