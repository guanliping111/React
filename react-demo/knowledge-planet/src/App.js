import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/iconfont.css'
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Main" component={Main}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
