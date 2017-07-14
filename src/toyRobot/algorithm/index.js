import _ from 'lodash'
import preloadedState from '../reducers/preloadedState'

export function findNextFacing(facing,leftOrRight) {
    return _.find(preloadedState.nextFacingRules,rule=>rule.facing===facing)[leftOrRight.toLowerCase()]
}