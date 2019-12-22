export default (state = {}, action) => {
    switch(action.type) {
        case 'KEY_PRESS':
            return {...state, keysPressed: action.payload}

            default:
                return state
    }
}