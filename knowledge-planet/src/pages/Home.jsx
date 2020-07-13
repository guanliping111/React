import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Content from '../components/Content';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
                <Search /> 
                <Header />
                <Content />
                <Footer />
            </div>
         );
    }
}
 
export default Home;


