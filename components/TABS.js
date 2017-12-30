/**
 * Created by shahar on 12/11/2017.
 */
import React from 'react';
import {Tabs} from 'antd';
import Grid from './Grid.js'
const TabPane = Tabs.TabPane;
import * as utils from '../utilities.js'
import { Form, Button } from 'antd';
const FormItem = Form.Item;
import AdvancedSearchForm from './AdvancedSearchForm.js'

function mapToSelect(option){
    return (
        <option value={option}>{option}</option>
    )
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm)

export default class TABS extends React.Component {
    constructor(){
        super();
        this.state = {
            trainedNetworks: []
        }
        this.state.trainedNetworks = JSON.parse(utils.httpGetSync(utils.SERVER_URL+'/getTrainedNetworks'))
        this.updateTrainedNetworks = this.updateTrainedNetworks.bind(this);
    }

    networksToSelectFrom(){
        return (
            <select name="networkSelected">
                {this.state.trainedNetworks.map(x=>mapToSelect(x[1]))}
            </select>
        )
    }

    updateTrainedNetworks(){
        var newNetworks = JSON.parse(utils.httpGetSync(utils.SERVER_URL+'/getTrainedNetworks'));
        this.setState({
            trainedNetworks : newNetworks
        })
    }

    render() {
        return (
            <Tabs
                defaultActiveKey="1"
            >
                <TabPane tab="Test" key="1">
                    <form target="targetFrame" action ={utils.SERVER_URL+'/uploader'} method = "POST" enctype = "multipart/form-data">
                        <input type = "file" name = "file" />
                        {this.networksToSelectFrom()}
                        <input type = "submit"/>
                    </form>
                    <iframe name="targetFrame" style={{margin:0,padding: 0,border:'none', width:'100%', height:'80px'}}/>
                </TabPane>
                <TabPane tab="Train" key="2">
                    <Button type="primary" shape="circle" icon="reload" onClick={()=>this.updateTrainedNetworks()}/>
                    <Grid gridData={this.state.trainedNetworks}/>
                    <WrappedAdvancedSearchForm/>
                </TabPane>
            </Tabs>
        )
    }
}