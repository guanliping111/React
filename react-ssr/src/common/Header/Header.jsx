import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    console.log(234)
    const handleClick = () => {
        console.log(123);
    }
    //did挂载
    useEffect(() => {
        console.log(456)
    },[])
    return (
        <div>
            <button onClick={handleClick}>
            按钮
            </button>
            <Link to="/">home</Link>
            <Link to="/login">login</Link>
            <Link to="/detail">detail</Link>
        </div>
    )
}