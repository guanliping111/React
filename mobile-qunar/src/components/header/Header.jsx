import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header(props) {
    console.log(props.title);
    const { title } = props;
    return (
        <div className="header">
            <div className="header-back">
                {/* 矢量图 无限拉升像素不变 */}
                <svg width="42" height="42">
                    {/* 折线 返回键 */}
                    <polyline points="25,13 16,21 25,29" 
                              stroke="gray" 
                              strokeWidth="2" 
                              fill="none"
                    />
                </svg>
            </div>
            <div className="header-title">{title}</div>
        </div>
    )
}
Header.protoType = {
    title: PropTypes.string.isRequired
}

