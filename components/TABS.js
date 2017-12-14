/**
 * Created by shahar on 12/11/2017.
 */
import React from 'react';
import { Tabs } from 'antd';
import Grid from './Grid.js'
const TabPane = Tabs.TabPane;
import { Upload, message, Button, Icon } from 'antd';

function callback(key) {
    console.log(key);
}

export default class TABS extends React.Component {
    render(){
        return (
            <Tabs
                onChange={callback}
                defaultActiveKey="2"
            >
                <TabPane tab="Test" key="1">
                    <Upload>
                        <Button>
                            <Icon type="upload" /> Upload file for classification
                        </Button>
                    </Upload>
                </TabPane>
                <TabPane tab="Train" key="2">
                    <Grid/>
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