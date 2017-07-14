let preloadedState = {
    constrain: {
        minX: 1,
        maxX: 5,
        minY: 1,
        maxY: 5
    },
    currentLocation: null,
    facingList: [
        'NORTH',
        'SOUTH',
        'EAST',
        'WEST'],
    nextFacingRules: [
        {
            facing: 'NORTH',
            left: 'WEST',
            right: 'EAST'
        },
        {
            facing: 'SOUTH',
            left: 'EAST',
            right: 'WEST'
        },
        {
            facing: 'EAST',
            left: 'NORTH',
            right: 'SOUTH'
        },
        {
            facing: 'WEST',
            left: 'SOUTH',
            right: 'NORTH'
        },
    ],
    demo: []
};

export default preloadedState
