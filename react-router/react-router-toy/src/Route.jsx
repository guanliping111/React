import React,{useContext} from 'react';
import { func } from 'prop-types';
import { context } from './BrowserRouter';

export default function Route (props) {
    const { pathname } = useContext(context);
    const { path, component : Com } = props; // 使用 全局上的 pathname
    console.log(window.location);
    return (
        pathname === path ? <Com /> : null
    )
}