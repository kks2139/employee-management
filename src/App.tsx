import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import './Common.scss';
import {EmployeePage} from './pages/index';

function App() {
  return (
    <div css={style}>
      <EmployeePage></EmployeePage>
    </div>
  );
}

const style = css`
  background-color: #282c34;
  min-height: 100vh;
`;

export default App;