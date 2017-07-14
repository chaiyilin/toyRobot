import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'antd'
import Cell from './Cell'
import {centre} from '../style'

export class Table extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {constrain} = this.props
        let rows = [], cols = []
        for (let i = constrain.maxY; i >= constrain.minY; i--) {
            rows.push(i)
        }
        for (let j = constrain.minX; j <= constrain.maxX; j++) {
            cols.push(j)
        }
        return (
            <div >
                <For each="row" of={ rows }>
                    <Row key={ row } style={centre}>
                        <For each="col" of={ cols }>
                            <Cell key={ row.toString() + '_' + col.toString() } x={col} y={row}></Cell>
                        </For>
                    </Row>
                </For>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentLocation, constrain} = state;
    return {
        currentLocation,
        constrain
    }
};

export default connect(mapStateToProps)(Table);
