import reducer from './index';
import {
    PLACE,
    MOVE,
    LEFT,
    RIGHT,
    REPORT,
    DEMO,
    RESET
} from '../actions/actionTypes';
import preloadedState from './preloadedState';

describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(preloadedState)
    });

    it('should not PLACE', () => {
        const wrongPlaceAction = {
            type: PLACE,
            payload: {
                x: 6,
                y: 2,
                facing: 'NORTH'
            }
        }
        const wrongPlaceState = reducer(preloadedState, wrongPlaceAction)
        const expectedCurrentLocationFromWrongPlaceState = null
        expect(wrongPlaceState.currentLocation).toEqual(expectedCurrentLocationFromWrongPlaceState)
    });

    describe('should PLACE then other action', () => {
        function correctPlaceAction (){
            return {
            type: PLACE,
            payload: {
                x: 2,
                y: 2,
                facing: 'NORTH'
            }
        }}
        function place(){
            return reducer(preloadedState, correctPlaceAction())
        }
        describe('should PLACE then RESET', () => {
            let afterPlaceState
            it('should place', () => {
                const expectedCurrentLocationFromCorrectPlaceState = correctPlaceAction().payload
                expect(place().currentLocation).toEqual(expectedCurrentLocationFromCorrectPlaceState)
            });


            it('should reset', () => {
                const resetAction={type:RESET}
                const afterResetState=reducer(afterPlaceState, resetAction)
                expect(afterResetState.currentLocation).toEqual(null)
            });
        })

        describe('should PLACE then LEFT or RIGHT', () => {
            it('should not LEFT', () => {
                const leftAction={type:LEFT}
                const afterLeftState=reducer(preloadedState, leftAction)
                expect(afterLeftState.currentLocation).toEqual(null)
            });

            it('should LEFT', () => {
                let afterPlaceState=place()
                const leftAction={type:LEFT}
                const afterLeftState=reducer(afterPlaceState, leftAction)
                expect(afterLeftState.currentLocation.facing).toEqual('WEST')
            });

            it('should not RIGHT', () => {
                const rightAction={type:RIGHT}
                const afterRightState=reducer(preloadedState, rightAction)
                expect(afterRightState.currentLocation).toEqual(null)
            });

            it('should RIGHT', () => {
                let afterPlaceState=place()
                const rightAction={type:RIGHT}
                const afterRightState=reducer(afterPlaceState, rightAction)
                expect(afterRightState.currentLocation.facing).toEqual('EAST')
            });

        })

        describe('should PLACE then MOVE', () => {

            it('should not Move if not placed', () => {
                const moveAction={type:MOVE}
                const afterMoveState=reducer(preloadedState, moveAction)
                expect(afterMoveState.currentLocation).toEqual(null)
            });

            it('should not Move if not safe', () => {
                let afterPlaceState=place()
                afterPlaceState.currentLocation.y=5
                const moveAction={type:MOVE}
                const afterMoveState=reducer(afterPlaceState, moveAction)
                expect(afterMoveState).toEqual(afterPlaceState)
            });

            describe('should Move', () => {
                let afterPlaceState
                beforeEach(() => {
                    afterPlaceState=place()
                });

                it('should Move North', () => {
                    afterPlaceState.currentLocation.facing='NORTH'

                    const moveAction={type:MOVE}
                    const afterMoveState=reducer(afterPlaceState, moveAction)
                    expect(afterMoveState.currentLocation.y).toEqual(3)
                });

                it('should Move SOUTH', () => {
                    afterPlaceState.currentLocation.facing='SOUTH'
                    const moveAction={type:MOVE}
                    const afterMoveState=reducer(afterPlaceState, moveAction)
                    expect(afterMoveState.currentLocation.y).toEqual(1)
                });

                it('should Move EAST', () => {
                    afterPlaceState.currentLocation.facing='EAST'
                    const moveAction={type:MOVE}
                    const afterMoveState=reducer(afterPlaceState, moveAction)
                    expect(afterMoveState.currentLocation.x).toEqual(3)
                });

                it('should Move WEST', () => {
                    afterPlaceState.currentLocation.facing='WEST'
                    const moveAction={type:MOVE}
                    const afterMoveState=reducer(afterPlaceState, moveAction)
                    expect(afterMoveState.currentLocation.x).toEqual(1)
                });
            });

        })

    })
})