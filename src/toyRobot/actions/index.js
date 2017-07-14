
import {
    PLACE,
    MOVE,
    LEFT,
    RIGHT,
    REPORT,
    DEMO,
    RESET
} from './actionTypes';

export const place = (x, y, facing) => {
    return {
        type: PLACE,
        payload: {
            x,
            y,
            facing
        }
    };
}

export const move = () => {
    return {
        type: MOVE
    };
}

export const left = () => {
    return {
        type: LEFT
    };
}

export const right = () => {
    return {
        type: RIGHT
    };
}

export const report = () => {
    return {
        type: REPORT
    };
}

export const reset = () => {
    return {
        type: RESET
    };
}

