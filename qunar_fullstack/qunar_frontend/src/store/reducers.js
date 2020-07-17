import {ACTION_SET_IS_CITY_SELECTOR_VISIBLE, ACTION_SET_CITY_DATA} from './actions';

export default {
    //页面状态 改变对应数据 的改变 分支上的
    isCitySelectorVisible(state = false, action) {
        const {type, payload} = action;
        switch(type) {
            case  ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
                return payload;
            default:
        }
        return state;
    },
    cityData (state = null, action) {
        const {type, payload} = action;
        switch(type) {
            case ACTION_SET_CITY_DATA:
                return payload;
            default:
        }
        return state;
    }
    // isLoadingCityData 
    //处理与FetchCityData 的逻辑关系
}