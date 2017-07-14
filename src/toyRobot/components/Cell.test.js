import React from 'react'
import {shallow,mount} from 'enzyme'
import {Cell} from './Cell'
import preloadedState from '../reducers/preloadedState'

describe('should render Cell', () => {
    it('should render Cell with arrow', () => {
        const props = {
            x: 1,
            y:1,
            currentLocation:{
                x: 1,
                y:1,
                facing:"NORTH"
            }
        }

        const enzymeWrapper = mount(<Cell {...props} />);
        expect(enzymeWrapper.text().indexOf(String.fromCharCode(8593))>=0).toEqual(true);
    })

    it('should render Cell without arrow', () => {
        const props = {
            x: 1,
            y:1,
            currentLocation:{
                x: 1,
                y:2,
                facing:"NORTH"
            }
        }

        const enzymeWrapper = mount(<Cell {...props} />);
        expect(enzymeWrapper.text().indexOf(String.fromCharCode(8593))<0).toEqual(true);
    })

})