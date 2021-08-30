import {employee} from '../utils/interfaces';

const SET_EMPLOYEE_LIST = 'employeeList/SET_EMPLOYEE_LIST';

export const  setEmployeeList = (arg: employee[])=> ({
    type: SET_EMPLOYEE_LIST,
    payload: arg
});
    
type actionType = 
    | ReturnType<typeof setEmployeeList>

type stateType = {
    employeeList: employee[]
}

const initState = {
    employeeList: []
}

const employeeList = (state: stateType = initState, action: actionType)=>{
    switch(action.type){
        case SET_EMPLOYEE_LIST:
            return {
                ...state,
                employeeList: action.payload.slice()
            };
        default:
            return state;
    }
}

export default employeeList;