/**
 * Created by shahar on 12/11/2017.
 */
import React from 'react';
import Tab from 'grommet/components/Tabs/Tab';
import Paragraph from 'grommet/components/Paragraph';
import FormUploadIcon from 'grommet-icons/icons/FormUpload.js'
import Button from 'grommet/components/Button';
import Tabs from 'grommet/components/Tabs/Tabs';

export default class TABS extends React.Component {

    render(){
        return (
            <Tabs>
                <Tab title='Test'>
                    <Paragraph>
                        Test
                    </Paragraph>
                    <Button
                            style={{direction:"rtl"}}
                            icon={<FormUploadIcon/>}
                            label='Upload a file for classification'
                            onClick={()=>console.log('clicked')}
                            href='#'
                            primary={false}
                            secondary={false}
                            accent={false}
                            critical={false}
                            plain={false} />
                </Tab>
                <Tab title='Train'>
                    <Paragraph>
                        Train
                    </Paragraph>
                    <input type='text'
                           value=''
                           onChange={()=>{}} />
                </Tab>
            </Tabs>
        )
    }
}