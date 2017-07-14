import React, {Component} from 'react'
import {connect} from 'react-redux'
import {centre} from '../style'
import PropTypes from 'prop-types'

export class Cell extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }

    render() {
        const {currentLocation, x, y} = this.props
        const isCurrent = currentLocation && currentLocation.x === x && currentLocation.y === y
        let arrow
        if (isCurrent) {
            switch (currentLocation.facing) {
                case 'NORTH':
                    arrow = 8593
                    break
                case 'SOUTH':
                    arrow = 8595
                    break
                case 'EAST':
                    arrow = 8594
                    break
                case 'WEST':
                    arrow = 8592
                    break
                default:
                    arrow = ''
            }
        } else {
            arrow = ''
        }
        const style = Object.assign({}, {
            fontFamily: 'Source Code Pro',
            color: 'black',
            background: 'Aqua',
            height: '60px',
            width: '60px',
            margin: '5px'
        }, centre)

        return (
            <div style={style}>
                <span>
                    {String.fromCharCode(arrow)}
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentLocation} = state;
    return {
        currentLocation
    }
};


export default connect(mapStateToProps)(Cell);
