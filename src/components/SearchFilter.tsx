import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useState } from 'react';

interface filterParam {
    field: string
    text: string
}

interface Props {
    onChangeText: (arg: string)=>void;
    onChangeCombo: (arg: string)=>void;
    onSearch: (arg: filterParam)=>void;
}

function SearchFilter({onChangeText, onChangeCombo, onSearch}: Props){
    const options = [
        {label: 'First Name', value: 'first_name'},
        {label: 'Last Name', value: 'last_name'},
        {label: 'Age', value: 'age'},
        {label: 'E-mail', value: 'email'}
    ]
    const [filter, setFilter] = useState({field: 'first_name', text: ''});
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
        const {value, name} = e.currentTarget;
        setFilter({
            ...filter,
            [name]: value
        });
    } 
    const doSearch = ()=>{
        onSearch(filter);
    };

    const onClick = ()=> doSearch();
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>)=> {
        if(e.key === 'Enter') doSearch();
    } 

    return (
        <div css={style}>
            <div className='wrapper'>
                <select name='field' onChange={onChange}>
                    {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <input 
                    name='text'
                    placeholder='검색어를 입력하세요!'
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={filter.text}>
                </input>
                <div className='btn-1' onClick={onClick}>검색</div>
            </div>
        </div>
    );
}

const style = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    border-radius: var(--radius-2);
    box-shadow: 0 0 15px -2px black;
    margin-bottom: 10px;
    .wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        color: var(--color-gray);
        input {
            width: 250px;
            height: 35px;
            padding-left: 10px;
            margin: 0 10px;
            &::placeholder {
                color: var(--color-gray);
            }
        }
    }
    select {
        font-size: 14px;
        width: 110px;
        padding-left: 5px;

    }
`;

export default SearchFilter;