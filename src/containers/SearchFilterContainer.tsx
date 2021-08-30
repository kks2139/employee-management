import React from 'react';
import {SearchFilter} from '../components/index';
import {useDispatch} from 'react-redux';
import {setSearchValues} from '../redux-modules/searchFilter';
import {searchValues} from '../utils/interfaces';

function SearchFilterContainer(){
    const dispatch = useDispatch();

    const onSearchClick = (param: searchValues)=>{
        dispatch(setSearchValues(param))
    } 

    return (
        <SearchFilter onSearch={onSearchClick}></SearchFilter>
    );
}

export default SearchFilterContainer;