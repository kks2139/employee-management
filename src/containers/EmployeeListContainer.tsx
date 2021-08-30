import React from 'react';
import {EmployeeList} from '../components/index';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-modules/index';

function EmployeeListContainer(){
    const {text, field} = useSelector((state: RootState)=> state.searchFilter);

    return (
        <EmployeeList filter={{text, field}}></EmployeeList>
    );
}

export default EmployeeListContainer;