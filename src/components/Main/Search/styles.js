import styled from "styled-components";
import { BREAK_POINTS, COLORS } from "../../../styles";

export const Container = styled.div`
    display: flex;
    justify-content: start;
	margin-bottom: 2rem;

    @media (min-width: ${BREAK_POINTS.SM}) {
        padding: 0 1rem;
    }
`

export const SearchInput = styled.input`
	border: none;
    padding: 0.65rem 1.2rem;
    min-width: 250px;
    outline-color: ${COLORS.BORDER};
    width: 100%;

    box-shadow: 0px 0px 14px -2px #00000024;

    @media (min-width: ${BREAK_POINTS.SM}) {
        width: unset;
    }
`