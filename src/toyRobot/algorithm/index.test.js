import {findNextFacing} from './index'
import preloadedState from '../reducers/preloadedState'

describe('algorithm', () => {
    it('should find facing', () => {
        expect(findNextFacing('NORTH','left')).toEqual('WEST')
    })

});