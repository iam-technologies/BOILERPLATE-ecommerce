import {combineReducers} from 'redux';

import pageReducer from './pageReducers';

const rootReducer = combineReducers(
    {
        pageReducer
    }
)

export default rootReducer;