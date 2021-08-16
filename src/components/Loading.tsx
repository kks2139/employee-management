import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {VscLoading} from 'react-icons/vsc';

function Loading(){
    return (
        <div css={style}>
            <VscLoading size='40' color='white'></VscLoading>
        </div>
    );
}

const style = css`
    position: relative;
    margin: 20px;
    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        animation-name: turn;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes turn {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`;

export default Loading;