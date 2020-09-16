import React, { createContext } from 'react';
const context = createContext();

// context.Provider
class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reduxState: props.store.getState()
        }
    }
    componentDidMount() {
        const { store } = this.props;
        store.subscribe(() => { //监听redux store变化 页面是否要刷新
            this.setState({
                reduxState: store.getState()
            })
        })
    }
    render() {
        console.log(this.props)
        const { store } = this.props;
        const { reduxState } = this.state;
        return (
            <context.Provider value={{store, reduxState}}>
                { this.props.children }
            </context.Provider>
        )
    }
}
//封装 connect
function connect(mapState, mapDispatch) {
    return function(Com){
        return class Connected extends React.Component {
            render() {
                // 应当是 来自于 redux 里面 怎么拿到 redux 里面的状态
                // redux 在 provider 上面 怎么拿到 Provider -> 用 Consumer
                // let reduxstate = { a:1, b:2 } //redux 里面的状态
                // let filterProps = {};//原来的值
                // // Object.assign 用于对象的合并
                // if (mapState) {
                //     filterProps = Object.assign(filterProps, mapState(reduxstate))
                // }
                // if (mapDispatch) {
                //     filterProps = Object.assign(filterProps, mapDispatch())
                // }
                // return (<Com {...filterProps}/> )
                return (<context.Consumer>
                    {
                        //createStore 创建出来的store 要结构
                        ({store}) => {
                            const state = store.getState();
                            const dispatch = store.dispatch;
                            let props = {}
                            if(mapState) {
                                props = Object.assign(props, mapState(state));
                            }
                            if(mapDispatch) {
                                props = Object.assign(props, mapDispatch(dispatch));
                            }
                            return <Com {...props}/>
                        }
                    }
                    </context.Consumer>)
            }
        }
    }
}
export {
    context,
    Provider,
    connect
}