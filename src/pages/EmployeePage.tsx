import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useState } from 'react';
import {SearchFilterContainer, EmployeeListContainer} from '../containers/index';

interface filterParam {
    field: string
    text: string
}

function EmployeeMng(){
    const [filter, setFilter] = useState({
        field: '',
        text: ''
    });
    const onSearchClick = (param: filterParam)=>{
        setFilter({...param});
    } 

    return (
        <div css={style}>
            <div className='wrapper'>
                <SearchFilterContainer></SearchFilterContainer>
                <div className='emp-box'>
                    <EmployeeListContainer></EmployeeListContainer>
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