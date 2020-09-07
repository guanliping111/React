import React , { createContext } from 'react';
import { createContext } from 'redux';
const context = createContext();
class Provider extends React.Component {
    render() { 
        const { store } = this.props;
        return ( 
            <context.Provider value={store}>

            </context.Provider>
        )
    }
}
 
export {
    context,
    Provider
}