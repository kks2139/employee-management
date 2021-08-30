import {searchValues} from '../utils/interfaces';

const SET_SEARCH_VALUES = 'searchFilter/SET_SEARCH_VALUES';

export const  setSearchValues = (arg: searchValues)=> ({
    type: SET_SEARCH_VALUES,
    payload: arg
});
    
type actionType = 
    | ReturnType<typeof setSearchValues>

type stateType = {
    text: string
    field: string
}

const initState = {
    text: '',
    field: ''
}

const searchFilter = (state: stateType = initState, action: actionType)=>{
    switch(action.type){
        case SET_SEARCH_VALUES:
            return {
                ...state,
                text: action.payload.text,
                field: action.payload.field,
            };
        default:
            return state;
    }
}

export default searchFilter;