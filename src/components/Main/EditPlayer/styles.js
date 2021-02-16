import styled, { keyframes } from "styled-components";
import { COLORS, BREAK_POINTS } from "../../../styles";

const Expand = keyframes`
    0% {
        height: 0%;
    }
    100% {
        height: 100%;
    }

`;

export const EditForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    overflow: hidden;
	padding: 1rem 1.5rem;
	height: 100%;
    animation: ${Expand} 250ms linear;

`
export const Fields = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 1rem;
`

export const Field = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 1rem;
`
export const Label = styled.label`
	margin-bottom: 0.25rem;
	font-size: 0.75rem;

	@media (min-width: ${BREAK_POINTS.LG}) {
		font-size: 0.85rem;
	}
`
export const Input = styled.input`
	border: 1px solid ${COLORS.BORDER_LIGHT};
	padding: 0.35rem 0.5rem;
	width: 100%;

	&::placeholder {
		font-size: 0.75rem;
	}
`

export const Actions = styled.div`
	display:flex;
	justify-content: flex-end;
	align-self: flex-end;
`
export const Action = styled.button`
	border: none;
	background-color: ${props => props.color ?? COLORS.PRIMARY};
	padding: 0.35rem 1.5rem;
	margin-left: 0.5rem;
	color: white;
	cursor: pointer;
`