import {combineReducers} from 'redux';

import keyPressReducer from './keyPressReducer.js';

export default combineReducers({
    keyPressed: keyPressReducer
});