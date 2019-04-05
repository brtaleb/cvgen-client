import {combineReducers} from 'redux'
import fieldsReducer from './fieldsReducer'

const combinedReducers = combineReducers({
    fieldsStore: fieldsReducer
});

export default combinedReducers;