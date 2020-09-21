import React from 'react';
let p = new Promise((resolve) => {
    setTimeout(() => {
        resolve('加载成功！！');
    },3000);
})
let status = 'pending';
let res;//后端的接口
//发请求
function req() {
    p.then((r) => {
        status = 'success';//拿结果
        res = r;
    }, () => {})
    if(status === 'pending') { //未拿到结果
        throw p; //catch
    }else if(status === 'success') {
        return res;
    }
}

export default forwardref(function Demo(props, ref) {
    const res = req(); //req 内部 throw
    console.log('----------');
    return (
        <h2>
            { res }
        </h2>
    )
})