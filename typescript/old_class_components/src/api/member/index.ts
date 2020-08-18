import { MemberEntity } from '../../model';
import { members } from './mockData';

//类型声明 属性值的声明
//: Promise<MemberEntity[]>  ts专属写法
//fetchMembers 函数返回值的类型是 MemberEntity[] 是一个 Promise的返回结果
const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
};

export const memberAPI = {
  fetchMembers,//获取列表的方法
};