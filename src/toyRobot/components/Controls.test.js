import React from 'react'
import {shallow, mount} from 'enzyme'
import {Controls} from './Controls'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {cyan500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import preloadedState from '../reducers/preloadedState'

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    }
});
function setup() {
    const props = {
        place: jest.fn(),
        left: jest.fn(),
        right: jest.fn(),
        move: jest.fn(),
        reset:jest.fn(),
        constrain:preloadedState.constrain,
        facingList:preloadedState.facingList
    }


    const enzymeWrapper = mount(
        <MuiThemeProvider muiTheme={muiTheme}>
            <Controls {...props} />
        </MuiThemeProvider>);
    return {
        props,
        enzymeWrapper
    }
}

describe('should render Controls', () => {
    it('should invoke actions', () => {
        const {enzymeWrapper, props} = setup()
        enzymeWrapper.find('#place').simulate('click')
        expect(props.place.mock.calls.length).toBe(1)
        enzymeWrapper.find('#move').simulate('click')
        expect(props.move.mock.calls.length).toBe(1)
        enzymeWrapper.find('#left').simulate('click')
        expect(props.left.mock.calls.length).toBe(1)
        enzymeWrapper.find('#right').simulate('click')
        expect(props.right.mock.calls.length).toBe(1)
        enzymeWrapper.find('#reset').simulate('click')
        expect(props.reset.mock.calls.length).toBe(1)
    })
})