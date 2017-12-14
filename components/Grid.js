/**
 * Created by shahar on 12/11/2017.
 */
import React from 'react';
import { Table, Icon, Divider } from 'antd';

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}]

export default class Grid extends React.Component {
    render(){
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}

//         style={{direction:"rtl"}}
//         icon={<FormUploadIcon/>}
//         label='Upload a file for classification'
//         onClick={()=>console.log('clicked')}
//         href='#'
//         primary={false}
//         secondary={false}
//         accent={false}
//         critical={false}
//         plain={false}
// />
// <input id='uploadInput' type='button' hidden={true} />