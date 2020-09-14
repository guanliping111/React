//假数据 真数据前用一下
import Mock from 'mockjs';

export default Mock.mock('/posts/','get', {
    success:  true,
    title: 'aaa！',
    content: 'ddup',
    'list|5-10':[{
        'name': '@name()',
        'title':'@title()', //随机生成title
        'address': '@city(true)',
        'email': '@email',
        'id': '@id',
        // "number|1-100": 100
        'Age': '@integer(0,120)',
        // 'key|+1': 1
    }]
});