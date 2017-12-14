import React from 'react';
import ReactDOM from 'react-dom';
import TABS from './components/TABS.js'
import 'antd/dist/antd.less';

class App extends React.Component {
    render() {
        return (
            <div>
                <TABS/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));