import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import './Common.scss';
import EmloyeeMgt from './pages/EmployeeMng';

function App() {
  return (
    <div css={style}>
      <EmloyeeMgt></EmloyeeMgt>
    </div>
  );
}

const style = css`
  background-color: #282c34;
  min-height: 100vh;
`;

export default App;