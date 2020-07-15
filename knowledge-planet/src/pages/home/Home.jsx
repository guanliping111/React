import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Search from '../../components/search/Search';
import Content from '../../components/content/Content';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wrapper"> 
                <Header />
                <Search /> 
                <Content />
                <Footer />
            </div>
         );
    }
}
 
export default Home;


