import React from 'react';
import  Home from './pages/Home/index.jsx';
import  Login from './pages/Login/index.jsx';
import  Detail from './pages/Detail/index.jsx';
import App from './App';

export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/detail',
                component: Detail
            }
        ]
    }
]