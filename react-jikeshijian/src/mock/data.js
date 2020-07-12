import Mock from 'mockjs'
 
export default Mock.mock('/data/','get',{
    'list|5-10':[{
       'title':'@title()' ,
       'finish|1-2':1,
       'learned|0-20':1,
       'lesson|20-40':20,
       'image':'@image(200*200)',
        'finished|0-100': 1, //学完
        'type|1-5':1,
        'index|+1':1
        }]    
})
