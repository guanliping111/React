//假数据 真数据前用一下
import Mock from 'mockjs';

export default Mock.mock('/posts/','get', {
    success:  true,
    title: '你真棒！',
    content: '每天坚持学习',
    'list|5-10':[{
        'title':'@title()', //随机生成title
        'email': '@email',
        'id': '@id',
        'key|+1': 1
    }]
});