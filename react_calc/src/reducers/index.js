import {combineReducers} from 'redux';

import keysPressedReducer from './keysPressedReducer.js';

export default combineReducers({
    keysPressed: keysPressedReducer
});