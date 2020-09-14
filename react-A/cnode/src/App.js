import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Collect from './Collect';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    header
    <Route path="/login" component={Login}></Route>
    <PrivateRoute path="/collect" component={Collect}></PrivateRoute>
    </BrowserRouter>
  );
}

export default App;
