import React from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from'react-router-dom';
class Main extends React.Component {
    constructor() {
        super();
    }
     componentDidMount () { //生命周期 onload
        console.log(this.props.match,'++++++++++++');
        const params = this.props.match.params;
        const searchTerm = params.searchTerm || undefined; 
        console.log(searchTerm, '+++++++++++');
        this.loadBeers(searchTerm);
    }
    loadBeers() {
        
    }
    render() {
        return(
            // 每个页面， 由组件构成
        <div className="wrapper">
            <Header siteName="Beer me!"></Header>
            <Search></Search>
            <Link to = "/about">About</Link>
        </div>
        )
    }
}

export default Main;