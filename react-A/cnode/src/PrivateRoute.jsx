import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import authStore from './store/auth';

function PrivateRoute(props) {
    const isLogin = authStore.isLogin;
    const { path, component } = props;
    if(!isLogin) {
        //Redirect 重定向 页面跳转 不能返回
        return <Redirect to="/login" />
    }
    return(
        <Route path={path} component={component}/>
    )
}
{/* <PrivateRoute path="/collect" component={collect} /> */}
export default PrivateRoute;