import { combineReducers } from 'redux';
import countReducer from '../reducer/countReducer'
import autReducer from './authReducer'


export default combineReducers({
    count : countReducer,
    user : autReducer
})