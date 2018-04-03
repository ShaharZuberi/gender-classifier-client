/**
 * Created by shahar on 12/11/2017.
 */
import React from 'react';
import { Table, Popconfirm } from 'antd';
import * as utils from '../utilities.js'
import { Button } from 'antd';

const columns = [{
    title:'Network spec',
    dataIndex: 'networkSpec',
    key: 'networkSpec',
    children:[{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                // render: text => <a href="#">{text}</a>,
            }, {
                title: 'Learning rate',
                dataIndex: 'learningRate',
                key: 'learningRate'
            },{
                title: 'Iterations',
                dataIndex: 'iterations',
                key: 'iterations'
            },{
                title: 'Signal length',
                dataIndex: 'signalLength',
                key: 'signalLength'
            },{
                title: 'Signal sample buffer',
                dataIndex: 'signalSampleBuffer',
                key: 'signalSampleBuffer'
            },{
                title: 'mfcc/wav',
                dataIndex: 'processType',
                key: 'processType'
            }]
    },{
    title:'Train dataset',
    dataIndex: 'trainDataset',
    key: 'trainDataset',
    children:[{
        title: 'male',
        dataIndex: 'maleTrain',
        key: 'maleTrain',
        children:[{
            title: 'precision',
            dataIndex: 'maleTrainPrecision',
            key: 'maleTrainPrecision'
        }]
    },{
        title: 'female',
        dataIndex: 'femaleTrain',
        key: 'femaleTrain',
        children:[{
            title: 'precision',
            dataIndex: 'femaleTrainPrecision',
            key: 'femaleTrainPrecision'
        }]
    }]
    },{
    title:'Test dataset',
    dataIndex: 'testDataset',
    key: 'testDataset',
    children:[{
            title: 'male',
            dataIndex: 'maleTest',
            key: 'maleTest',
            children:[{
                    title: 'precision',
                    dataIndex: 'maleTestPrecision',
                    key: 'maleTestPrecision'
                    },{
                    title: 'recall',
                    dataIndex: 'maleTestRecall',
                    key: 'maleTestRecall'
            }]
        },{
            title: 'female',
            dataIndex: 'femaleTest',
            key: 'femaleTest',
            children:[{
                    title: 'precision',
                    dataIndex: 'femaleTestPrecision',
                    key: 'femaleTestPrecision'
                    },{
                    title: 'recall',
                    dataIndex: 'femaleTestRecall',
                    key: 'femaleTestRecall'
            }]
        }]
    }, {
    title: 'Action',
    dataIndex: 'Action',
    key: 'Action'
    }]

export default class Grid extends React.Component {
    constructor(){
        super();
        this.deleteRequest = this.deleteRequest.bind(this);
        this.refreshAfterDeleteRequest = this.refreshAfterDeleteRequest.bind(this);
        this.state = {
            editable: false,
            lastlyDeleted: false
        }
    }

    deleteRequest(networnName){
        utils.httpGetSync(utils.SERVER_URL+'/deleteNetwork?name='+networnName)
        this.setState({
            lastlyDeleted: true
        })
    }

    refreshAfterDeleteRequest(){
        this.props.refreshfunction();
        this.setState({
            lastlyDeleted:false
        })
    }

    RowStructure(networkJSON) {
        var structure = {}
        structure.rowKey=networkJSON[0]
        structure.name=networkJSON[1]
        structure.learningRate=networkJSON[2]
        structure.iterations=networkJSON[3]
        structure.signalLength=networkJSON[4]
        structure.signalSampleBuffer=networkJSON[5]
        structure.processType=networkJSON[6]
        structure.maleTrainPrecision=networkJSON[7]
        structure.femaleTrainPrecision=networkJSON[8]
        structure.maleTestPrecision=networkJSON[9]
        structure.maleTestRecall=networkJSON[10]
        structure.femaleTestPrecision=networkJSON[11]
        structure.femaleTestRecall=networkJSON[12]
        structure.Action=(
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={()=>this.deleteRequest(networkJSON[1])}>
                {
                    this.state.lastlyDeleted ?
                        <Button type="primary" shape="circle" icon="reload" onClick={()=>this.refreshAfterDeleteRequest()}/>
                    :
                        <a href="#">Delete</a>
                }
            </Popconfirm>
        )

        return structure
    }

    render(){
        var data = this.props.gridData.map(this.RowStructure.bind(this));
        return (
            <Table bordered columns={columns} dataSource={data} />
        )
    }
}