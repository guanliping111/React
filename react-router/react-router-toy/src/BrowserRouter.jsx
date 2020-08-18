import React from 'react';

const context = React.createContext();

class BrowserRouter extends React.Component {
    state = {
        pathname: '/'
    }
    update = (pathinfo) => {
        // console.log(123);
        //强制更新一下
        // this.forceUpdate();
        this.setState(pathinfo);
    }
    render() { 
        console.log(456)
        return ( 
            <context.Provider value={
                {
                    pathname: this.state.pathname, 
                    update: this.update
                }  
            }>
                { this.props.children }
            </context.Provider>
         );
    }
}
 
export default BrowserRouter;
export {
    context, BrowserRouter
}

// export { default as Link } from "./Link.js";
// import xx as Link  from './Link.js'
// export { Link }