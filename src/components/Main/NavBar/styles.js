import styled from "styled-components";
import { COLORS } from "../../../styles";


export const NavContainer = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 3rem;
	padding-bottom: 32px;
	padding-top: 32px;
`

export const NavLinks = styled.nav`
    display: flex;
    justify-content: flex-end;
`

export const Favorites = styled.span`
	font-size: 1.75rem;
	color: ${COLORS.PRIMARY};
`

export const Title = styled.h1`
	font-size: 24px;
	margin-top: 0;
 	text-align: center;
	font-weight: bold;
	text-transform: uppercase;
	color: ${COLORS.PRIMARY};
`