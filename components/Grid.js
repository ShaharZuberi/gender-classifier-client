/**
 * Created by shahar on 12/11/2017.
 */
import React from 'react';
import { Table, Icon, Divider } from 'antd';

// const data = [{
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
// }];

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: text => <a href="#">{text}</a>,
}, {
    title: 'Learning rate',
    dataIndex: 'learningRate',
    key: 'learningRate',
},{
    title: 'Iterations',
    dataIndex: 'iterations',
    key: 'iterations',
},{
    title: 'Signal length',
    dataIndex: 'signalLength',
    key: 'signalLength',
},{
    title: 'Signal sample buffer',
    dataIndex: 'signalSampleBuffer',
    key: 'signalSampleBuffer',
},{
    title: 'mfcc/wav',
    dataIndex: 'processType',
    key: 'processType',
}]

function RowStructure(networkJSON) {
    return {
        rowKey:networkJSON[0],
        name:networkJSON[1],
        learningRate:networkJSON[2],
        iterations:networkJSON[3],
        signalLength:networkJSON[4],
        signalSampleBuffer:networkJSON[5],
        processType:networkJSON[6]
    }
}

export default class Grid extends React.Component {
    render(){
        // var receivedJSON = [[4, "test network", 0.01, 100, 320, 20, "mfcc"]];
        var data = this.props.trainedNetworks.map(RowStructure);

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