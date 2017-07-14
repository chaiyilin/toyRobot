import React from 'react'
import {shallow,mount} from 'enzyme'
import {Table} from './Table'
import {Row, Col} from 'antd'
import preloadedState from '../reducers/preloadedState'

function setup() {
    const props = {
        constrain: preloadedState.constrain
    }

    const enzymeWrapper = shallow(<Table {...props} />);
    return {
        props,
        enzymeWrapper
    }
}

describe('should render Table', () => {
    it('should render Rows', () => {
        const {enzymeWrapper} = setup()
        expect(enzymeWrapper.children().length).toEqual(preloadedState.constrain.maxY)
    })


})