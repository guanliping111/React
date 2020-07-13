import Mock from 'mockjs'
 
export default Mock.mock('/data/','get',{
    'list|3-5':[{
       'title':'@title()' ,
       'finish|1-2':1,
       'learned|0-20':1,
       'lesson|20-40':20,
       'image':Mock.Random.image('80x80', '#ecd9dd', 'image'),
        'type|1-5':1,
        'key|+1':1
    }]    
})
