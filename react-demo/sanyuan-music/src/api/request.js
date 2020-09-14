import { axiosInstance } from './config';
import { useEffect } from 'react';


// export const getRecommendListRequest = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 data:[{
//                     id: 1,
//                     title: 'aaaa'
//                 }]
//             })
//         },1000)
//     })
// }

//项目所有请求API的列表文件
//每个请求一个函数
//每个函数都返回一个promise

//api与actions的分离点
//axiosInstance.get 返回是Promise


//首页广告
export const getBannersRequest = () => {
    return axiosInstance.get("/banner");
}
//推荐歌单/列表
export const getRecommendListRequest = () => {
    return axiosInstance.get("/personalized");
};

//歌手列表 支持分页 0-50-100  -> offset
//接口请求规范
// reducer init = {singerList: [], offset: 0}
// useEffect dispatch getHotSingerList 异步 -> 两个action
// -> getHotSingerListRequest API 请求
// then 
//     changeSingerList [] [..oldSingerList, ...data]  同步
//     changeOffset 0  data.length  同步

// better-scroll baseUI scroll/index.js 上拉 触底 加载 更多

// 下拉刷新的时候 过程是怎样的
// 1. onPullDown offset 0 changeOffset 0
// 2. getHotSingerList -> getHotSingerListRequest(API) ->changeSingerList

// 前后端合作的要素有哪些？
// 1. 接口地址
//   url /top/artists 请求  restful 资源的暴露
// 2. 传参
// 3. 接口文档 后端给

//默认选择热门列表
export const getHotSingerListRequest = count => {
    return axiosInstance.get(`/top/artists?offset=${count}`);
};
//点击 分类 首字母选择
export const getSingerListRequest = (category, alpha, count) => {
    return axiosInstance.get(
      `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
    );
};

//歌手详情页
//history.push() List
export const getSingerInfoRequest = id => {
    return axiosInstance.get(`/artists?id=${id}`);
};