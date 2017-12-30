/**
 * Created by shahar on 12/11/2017.
 */
import React from 'react';
import * as utils from '../utilities.js'
import { Form, Row, Col, Input, Button } from 'antd';
import { Spin } from 'antd';
const FormItem = Form.Item;

const FIELDS = ['name','learningRate','iterations','signalLength','signalSampleBuffer','processType']

export default class AdvancedSearchForm  extends React.Component {
    constructor(){
        super();
        this.state={
            isTraining:false
        }
        this.setIsTrainingToFalse=this.setIsTrainingToFalse.bind(this);
    }

    mapToFormItems(field) {
        const { getFieldDecorator } = this.props.form;
        return (
            <Col span={8} style={{ display:'block'}}>
                <FormItem label={field}>
                    {getFieldDecorator(field,{initialValue:'-'})(
                        <Input placeholder={field}/>
                    )}
                </FormItem>
            </Col>
        )
    }

    getFields() {
        const children = [];
        children.push(FIELDS.map(this.mapToFormItems.bind(this)));
        return children;
    }

    handleReset(){
        this.props.form.resetFields();
    }

    sendTrainRequestToServer(e){
        e.preventDefault();
        var values = this.props.form.getFieldsValue();
        var valuesJSON = JSON.stringify(values);
        this.setState({
            isTraining:true
        })

        utils.httpPostAsync(utils.SERVER_URL+'/trainNewNetwork',valuesJSON,this.setIsTrainingToFalse)
    }

    setIsTrainingToFalse(){
        this.setState({
            isTraining:false
        })
    }
    //TODO: change the names from 'search' to 'add network' or something similar
    render(){
        return (
            (this.state.isTraining)
                ?
                <Spin tip="Training..."/>
                :
                <Form
                    className="ant-advanced-search-form"
                    style={{width:'50%',padding:'24px',background:'#fbfbfb',border:'1px solid #d9d9d9',borderradius:'6px'}}
                    /*onSubmit={this.handleSearch}*/
                    onSubmit={e=>this.sendTrainRequestToServer(e)}
                >
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">Submit for training</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset.bind(this)}>
                                Clear
                            </Button>
                        </Col>
                    </Row>
                </Form>
        )
    }
}