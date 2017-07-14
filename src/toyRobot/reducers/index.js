import preloadedState from './preloadedState'

import {
    PLACE,
    MOVE,
    LEFT,
    RIGHT,
    REPORT,
    DEMO,
    RESET
} from '../actions/actionTypes'
import * as algorithm from '../algorithm'

function safe(state, location) {
    return Number.isInteger(location.x) &&
        Number.isInteger(location.y) &&
        location.facing &&
        state.facingList.indexOf(location.facing) >= 0 &&
        location.x >= state.constrain.minX &&
        location.x <= state.constrain.maxX &&
        location.y >= state.constrain.minY &&
        location.y <= state.constrain.maxY
}

function place(state, location) {
    if (safe(state, location)) {
        return {...state, currentLocation: location}
    } else {
        return state
    }
}

function turn(state, leftOrRight) {
    if (state.currentLocation) {
        let newState = {...state}
        newState.currentLocation = {
            ...newState.currentLocation,
            facing: algorithm.findNextFacing(newState.currentLocation.facing, leftOrRight)
        }
        return newState
    } else {
        return state
    }
}

function preMove(location) {
    switch (location.facing) {
        case 'NORTH':
            return {...location, y: location.y + 1}
        case 'SOUTH':
            return {...location, y: location.y - 1}
        case 'EAST':
            return {...location, x: location.x + 1}
        case 'WEST':
            return {...location, x: location.x - 1}
    }
}

function move(state) {

    if (state.currentLocation) {
        const newLocation = preMove(state.currentLocation)
        if (safe(state, newLocation)) {
            return {...state, currentLocation: newLocation}
        } else {
            return state
        }
    }
    return state
}



function reducers(state, action) {
    switch (action.type) {
        case PLACE : {
            return place(state, action.payload)
        }
        case LEFT : {
            return turn(state, LEFT)
        }
        case RIGHT : {
            return turn(state, RIGHT)
        }
        case MOVE : {
            return move(state)
        }
        case DEMO : {
            return demo(state)
        }
        default:
            return state;
    }
}

const rootReducer = (state = preloadedState, action) => {
    if (action.type === RESET) {
        return preloadedState
    }
    return reducers(state, action)
}
export default rootReducer
