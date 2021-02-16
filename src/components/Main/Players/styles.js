import styled, { css } from "styled-components";
import { BREAK_POINTS, COLORS } from "../../../styles";

export const CardsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100%;
`

export const Paginate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 4rem;
    margin-top: 2rem;

    @media (min-width: ${BREAK_POINTS.LG}) {
        flex-direction: row;
    }
`

export const PageText = styled.span`
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
`

export const PaginateBtn = styled.span`
    display: inline-block;
    padding: 0.45rem 1.5rem;
    margin: 0 0.5rem 0.5rem;
    border-radius: 3px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: white;
    background-color: ${COLORS.ACCENT};
    ${props => props.disable ? css`
        pointer-events: none;
        background-color: #999999;
    ` : null}

    @media (min-width: ${BREAK_POINTS.LG}) {
        width: unset;
    }
`
