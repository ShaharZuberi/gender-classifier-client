/**
 * Created by shahar on 12/11/2017.
 */
import React from 'react';
import {Tabs} from 'antd';
import Grid from './Grid.js'
const TabPane = Tabs.TabPane;

var SERVER_URL = 'http://192.168.56.101:42426'

function callback(key) {
    console.log("callback: " + key);
}
function httpGetSync(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText
}

function mapToSelect(option){
    return (
        <option value={option}>{option}</option>
    )
}

export default class TABS extends React.Component {

    constructor(){
        super();
        this.state = {
            trainedNetworks: []
        }
        this.state.trainedNetworks = JSON.parse(httpGetSync(SERVER_URL+'/getTrainedNetworks'))
    }

    networksToSelectFrom(){
        return (
            <select name="networkSelected">
                {this.state.trainedNetworks.map(x=>mapToSelect(x[1]))}
            </select>
        )
    }

    render() {
        return (
            <Tabs
                onChange={callback}
                defaultActiveKey="1"
            >
                <TabPane tab="Test" key="1">
                    <form target="targetFrame" action ={SERVER_URL+'/uploader'} method = "POST" enctype = "multipart/form-data">
                        <input type = "file" name = "file" />
                        {this.networksToSelectFrom()}
                        <input type = "submit"/>
                    </form>
                    <iframe name="targetFrame" style={{margin:0,padding: 0,border:'none', width:'100px', height:'80px'}}/>
                </TabPane>
                <TabPane tab="Train" key="2">
                    <Grid trainedNetworks={this.state.trainedNetworks}/>
                </TabPane>
            </Tabs>
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