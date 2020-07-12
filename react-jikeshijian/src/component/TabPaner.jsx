import React, { Component } from 'react';
// import './mock/data.js';
import { Tabs, Table } from 'antd';
import '../mock/data';
// import axios from 'axios';

const { TabPane } = Tabs;

const columns = [
    {
        title: 'image',
        dataIndex: 'image',
        key: 'image',
    },
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'lesson',
        dataIndex: 'lesson',
        key: 'lesson',
    },
    {
        title: 'learned',
        dataIndex: 'learned',
        key: 'learned',
    },
    {
        title: 'finished',
        dataIndex: 'finished',
        key: 'finished',
    },
    {
        title: 'type',
        dataIndex: 'type',
        key: 'type',
    },
]
class TabPaner extends Component {

    handleType = () => {
        console.log('1')
    }
    render() {
        const data = this.props.data;
        console.log(data, '++++++++++++++')
        return (
            <div>
                <Table
                    dataSource={data}
                    columns={columns}
                    bordered />;
            </div>
        );
    }
}

export default TabPaner;