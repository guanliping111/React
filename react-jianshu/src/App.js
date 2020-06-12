import React from 'react';
import logo from './logo.svg';
import Header from './componets/Header'
import './App.css';


class App extends React.Component {
  state = {
    title: '123'
  }
  shouldComponentUpdate() {


  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: '123'
      })
    }, 3000)
  }
  render() {
    return (
      <div>
        123456
        <Header title={this.state.title}/>
      </div>
    )
  }
}


export default App;

