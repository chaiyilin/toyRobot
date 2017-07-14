import demoData from './demoData'
import {store} from '../index'
import _ from 'lodash'

export default function demo() {
    _.forEach(demoData, (action, index) => {
        setTimeout(() => store.dispatch(action), 1000 * index)
    })
}