import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {Row, Col} from 'antd'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import Snackbar from 'material-ui/Snackbar'
import {centre} from '../style'
import demo from '../actions/demo'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export class Controls extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        isStackBarOpen: false,
        coordinate: '',
        x: '',
        y: ''
    }

    handleXChange = (event) => this.setState({x: parseInt(event.target.value)})
    handleYChange = (event) => this.setState({y: parseInt(event.target.value)})
    handleFacingChange = (event, index, value) => this.setState({facing: value})
    place = () => this.props.place(this.state.x, this.state.y, this.state.facing)
    openStackBar = () => {
        this.setState({
            isStackBarOpen: true,
            coordinate: this.props.currentLocation ? `X: ${this.props.currentLocation.x} Y: ${this.props.currentLocation.y} Facing: ${this.props.currentLocation.facing}` : 'No current location'
        })

        setTimeout(() => this.setState({isStackBarOpen: false}), 3000);
    }

    render() {
        return (
            <div >
                <Row style={centre}>
                    <Col span={5}>
                        <label htmlFor="x">X:</label>
                        <input type="number"
                               name="x"
                               style={numericInput}
                               min={this.props.constrain.minX}
                               max={this.props.constrain.maxX}
                               value={this.state.x}
                               onChange={this.handleXChange}
                        />
                    </Col>
                    <Col span={5}>
                        <label htmlFor="y">Y:</label>
                        <input type="number"
                               name="Y"
                               style={numericInput}
                               min={this.props.constrain.minY}
                               max={this.props.constrain.maxY}
                               value={this.state.y}
                               onChange={this.handleYChange}
                        />
                    </Col>
                    <Col span={6}>
                        <Row style={centre}>
                            <Col span={6}>
                                <label htmlFor="facing">Facing:</label>
                            </Col>
                            <Col span={16} offset={3}>
                                <SelectField name="facing" style={{width: '120px', marginTop: '10px'}}
                                             value={this.state.facing}
                                             onChange={this.handleFacingChange}>
                                    <For each="facing" of={ this.props.facingList }>
                                        <MenuItem key={facing} value={facing} primaryText={facing}/>
                                    </For>
                                </SelectField>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={2} offset={2}>
                        <RaisedButton id="place" label="PLACE" onClick={this.place}/>
                    </Col>
                </Row>
                <Row style={centre}>
                    <RaisedButton id="left" label="LEFT" onClick={this.props.left} style={buttonStyle}/>
                    <RaisedButton id="move" label="MOVE" onClick={this.props.move} style={buttonStyle}/>
                    <RaisedButton id="right" label="RIGHT" onClick={this.props.right} style={buttonStyle}/>
                </Row>
                <Row style={centre}>
                    <RaisedButton id="report" label="REPORT" onClick={this.openStackBar} style={buttonStyle}/>
                    <RaisedButton id="reset" label="RESET" onClick={this.props.reset} style={buttonStyle}/>
                </Row>
                <Row style={centre}>
                    <RaisedButton label="DEMO" onClick={demo} style={buttonStyle}/>
                </Row>
                <Snackbar
                    open={this.state.isStackBarOpen}
                    message={this.state.coordinate}
                />

            </div>
        )
    }
}

const numericInput = {
    width: '60%',
}

const buttonStyle = {
    marginLeft: '10px',
    marginTop: '10px'
}
const mapStateToProps = state => {
    return state
};
export default connect(mapStateToProps, actions)(Controls);
