import {combineReducers} from 'redux'; 
import employeeReducer from './empooyeeReducer';

const rootReducer = combineReducers({
    employees:employeeReducer
});

export default rootReducer;