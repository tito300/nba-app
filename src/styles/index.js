import styled, { createGlobalStyle } from "styled-components";
/****
*	If you are familiar with styled-components, feel free
*	to add any global styling you'd like here & add it into the project!
****/

/* 
*  Values from bootstrap 
*  For time limit constraint, I will only support mobile and LG
*/
export const BREAK_POINTS = { 
    SM: '576px',
    LG: '992px',
}

export const COLORS = {
    PRIMARY: '#d9785f',
    SECONDARY: '#7c7c7c',

    BACKGROUND: '#f4f1f8',
    ACCENT:   '#756db4',

    BORDER: '#00000070',
    BORDER_LIGHT: '#c0c0c087',
    DANGER: '#ff9b9b',
    DANGER_DARK: '#bc3a3a',
}

export const Loading = styled.p`
	font-weight: 200;
	font-size: 24px;
	width: 100%;
	text-align: center;
`

export default createGlobalStyle`
    // normalization was added through styled-normalize package 
    * {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
    }

    body {
        background-color: ${COLORS.BACKGROUND};
    }

    p, label {
        color: #000000c2;
        font-size: 0.875rem;

        @media (min-width: ${BREAK_POINTS.LG}) {
            font-size: 1rem;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        color: #000000db;
    }
` 
