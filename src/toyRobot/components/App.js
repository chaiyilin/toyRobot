import React, {Component} from 'react'
import {connect} from 'react-redux'
import Table from './Table'
import Controls from './Controls'
import {Row, Col} from 'antd'

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{marginTop:'50px'}}>
                <Row>
                    <Col span={10} offset={1}>
                        <Table/>
                    </Col>
                    <Col span={12} offset={1}>
                        <Controls/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default App;
