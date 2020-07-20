import React, { useState } from 'react';
import { List, Icon } from 'antd';
import classNames from 'classnames';

const { Item } = List;
const TodoList = ({todo, onToggleFinished}) => {
    //删除
    const onDelete = e => {

    }
    return (
        <div className="list-wrap">
            { Todos.length === 0 ? (
                <p>暂无代办事件</p>
            ):(
                <List 
                itemLayout="horizontal"
                dataSource={Todos}
                renderItem={({id, text, finished}, idx) => {
                    const itemClasss = classNames({
                        "list-item":true,
                        "list-item__finished" : finished,
                    })
                    return (
                        //BEM CSS命名规范 Block Element Modifier
                        <Item className="list-item list-item__finished">
                            {/* <img src="" alt="" className="list-item--avatar"/> */}
                        </Item>
                    )
                    
                }}
                />
            )}
        </div>
    ) 
}