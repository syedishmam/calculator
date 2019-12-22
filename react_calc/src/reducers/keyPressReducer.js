export default (state = {}, action) => {
    switch(action.type) {
        case 'KEY_PRESS':
            return {...state, keyPressed: action.payload}

            default:
                return state
    }
}