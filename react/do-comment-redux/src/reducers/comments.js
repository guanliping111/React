// reducer 就是函数 做仓库
//数组 初始状态
let comments = [
    {
      "id": 1,
      "username": "巧纯",
      "content": "美女！约吗"
    }
  ];
  export default function(state = {
    comments: comments
  }) {
      //初始状态
    return state
  }