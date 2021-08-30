import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { Loading } from './index';
import { searchValues } from '../utils/interfaces';


interface employee {
    id: string
    first_name: string
    last_name: string
    gender: string
    age: number
    email: string
    job: string
    position: string
    salary_year: number
    avatar: string
}
interface employeeData {
    employees: employee[]
}

interface Props {
    filter: searchValues
}

function EmployeeList({filter}: Props){
    const {field, text} = filter;

    const getEmpolyeeList = gql`
        query GetEmployeeList(
            $text: String
            $field: String
        ){
            employees(
                text: $text
                field: $field
            ) {
                id
                first_name
                last_name
                age
                email
            }
        }
    `;

    // useQuery 제네릭 인자1 = data, 인자2 = variables(넘기는 파라미터값)
    const {loading, error, data, refetch} = useQuery<employeeData, searchValues>(
        getEmpolyeeList,
        {variables: {field, text}}
    );

    // useEffect(()=>{
    //     refetch()
    // }, [filter]);

    if(loading) return <Loading></Loading>
    if(error) return <p>Error !!!</p>
    return (
        <div css={style}>
            <section>
                <div className='field-wrapper header'>
                    <div className='field'>First Name</div>
                    <div className='field'>Last Name</div>
                    <div className='field'>Age</div>
                    <div className='field'>E-mail</div>
                </div>
            </section>
            {data && data.employees.map(d => 
                (
                    <section key={d.id}>
                        <div className='field-wrapper'>
                            <div className='field'>{d.first_name}</div>
                            <div className='field'>{d.last_name}</div>
                            <div className='field'>{d.age}</div>
                            <div className='field'>{d.email}</div>
                        </div>
                    </section>
                )
            )}
        </div>
    );
}

const style = css`
    section {
        width: 700px;
        height: 40px;
        .field-wrapper {
            display: flex;
            cursor: pointer;
            transition: .2s;
            .field {
                line-height: 35px;
                font-size: 16px;
                font-weight: bold;
                background-color: var(--color-blue);
                color: white;
                padding: 0 15px;
                box-shadow: 0 0 10px -5px black;
            }
            .field:nth-child(1) {min-width: 140px;} 
            .field:nth-child(2) {min-width: 140px;} 
            .field:nth-child(3) {min-width: 70px; text-align: center;} 
            .field:nth-child(4) {width: 100%;} 
            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 3px 10px -3px black;
            }
            
        }
        .header {
            cursor: unset;
            .field {
                background-color: var(--color-light-gray) !important;
                color: var(--color-dark-gray) !important;
                text-align: center;
            }
            &:hover {
                transform: unset;
            }
        }
    }      
`;

export default EmployeeList;