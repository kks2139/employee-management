import React from 'react';
import {EmployeeList, SearchFilter} from '../components/index';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useState } from 'react';

interface filterParam {
    field: string
    text: string
}

function EmployeeMng(){
    const [filter, setFilter] = useState({
        field: '',
        text: ''
    });
    const onChangeText = (text: string)=> setFilter({...filter, text});
    const onChangeCombo = (field: string)=> setFilter({...filter, field});
    const onSearchClick = (param: filterParam)=>{
        setFilter({...param});
    } 

    return (
        <div css={style}>
            <div className='wrapper'>
                <SearchFilter onSearch={onSearchClick} onChangeText={onChangeText} onChangeCombo={onChangeCombo}></SearchFilter>
                <div className='emp-box'>
                    <EmployeeList filter={filter}></EmployeeList>
                </div>
            </div>
        </div>
    );
}

const style = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 50px 0;
    .wrapper {
        width: calc(100% - 300px);
    };
    .emp-box {
        display: flex;
        justify-content: center;
    }
`;

export default EmployeeMng;