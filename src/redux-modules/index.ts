import {combineReducers} from 'redux';
import employeeList from './employeeList';
import searchFilter from './searchFilter';

const rootReducer = combineReducers({
    employeeList,
    searchFilter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;