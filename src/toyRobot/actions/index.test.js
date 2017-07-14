import * as actions from './index'
import * as types from './actionTypes'

describe('actions', () => {
    it('should create an action to PLACE', () => {
        const expectedAction = {
            type: types.PLACE,
            payload: {
                x:1,
                y:2,
                facing:'NORTH'
            }
        };
        expect(actions.place(1,2,'NORTH')).toEqual(expectedAction)
    })

    it('should create an action to MOVE', () => {
        const expectedAction = {
            type: types.MOVE
        };
        expect(actions.move()).toEqual(expectedAction)
    })

    it('should create an action to LEFT', () => {
        const expectedAction = {
            type: types.LEFT
        };
        expect(actions.left()).toEqual(expectedAction)
    })

    it('should create an action to RIGHT', () => {
        const expectedAction = {
            type: types.RIGHT
        };
        expect(actions.right()).toEqual(expectedAction)
    })

    it('should create an action to REPORT', () => {
        const expectedAction = {
            type: types.REPORT
        };
        expect(actions.report()).toEqual(expectedAction)
    })

    it('should create an action to RESET', () => {
        const expectedAction = {
            type: types.RESET
        };
        expect(actions.reset()).toEqual(expectedAction)
    })

/*    it('should call DEMO', () => {
        const expectedAction = {
            type: types.DEMO
        };
        expect(actions.demo()).toEqual(expectedAction)
    })*/
});