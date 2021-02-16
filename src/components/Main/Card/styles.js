import styled, { css } from "styled-components";
import { BREAK_POINTS, COLORS } from '../../../styles';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-basis: 100%;
	position: relative;

	background-color: white;
	box-shadow: 0px 0px 14px -2px #00000024;
	border-radius: 4px;
	margin: 1rem 0;
	text-align: center;
	transition: all 100ms linear;
	/* cursor: pointer; */

	&:hover {
		transform: scale(1.025);
		box-shadow: 0px 0px 20px -1px #00000035;
	}

	@media (min-width: ${BREAK_POINTS.SM}) {
		margin: 0 1rem 2rem;
		flex-basis: 280px;
	}

`

export const Name = styled.p`
	padding: 1rem 2rem;
	margin: 0;
	margin-bottom: 1rem;
	font-size: 18px;
	font-weight: 200;
	word-break: break-word;
	color: ${COLORS.ACCENT};
`

export const PlayerImg = styled.img`
	padding-left: 1rem;
	padding-right: 1rem;
	flex-grow: 1;
	width: 100%;
`

export const Team = styled.p`
	padding: 2rem;
	margin: 0;
	background-color: ${COLORS.PRIMARY};
    color: white;
    font-family: arial;
	font-size: 18px;
	position: relative;
	overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			top: -27px;
			right: -12px;
			width: 100px;
			height: 100px;
			border-radius: 50%;
			background-color: white;
			opacity: 0.1;
		}
		&::before {
			content: '';
			position: absolute;
			bottom: -10px;
			left: -5px;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background-color: white;
			opacity: 0.1;
		}

	
`

export const CardIcons = styled.div`
	position: absolute;
	top: 10px;
	right: 15px;

	display: flex;
	flex-direction: column;
`

export const EditIcon = styled.span`
	display: block;
	top: 10px;
	right: 15px;
	font-size: 1.5rem;
	font-weight: normal;
	color: ${COLORS.ACCENT};
    line-height: 1;
	opacity: 0.35;
	transition: all 300ms ease-in;
	cursor: pointer;
	margin-bottom: 0.35rem;

	&:hover {
		transform: rotate(360deg) scale(1.7);
	}
`; 
export const FavoriteIcon = styled(EditIcon)`
	${props => props.highlight ? css`
		color: ${COLORS.PRIMARY};
		opacity: 1;
	` : null}
	&:hover {
		transform: scale(1.7);
	}
`

export const Container = styled.div`
	width: 100%;
	min-width: 280px;
	display: flex;

	@media (min-width: ${BREAK_POINTS.SM}) {
		width: 50%;
	}
	@media (min-width: ${BREAK_POINTS.LG}) {
		width: 25%;
	}

	&:nth-child(odd) {
		${Team}::after {
			bottom: -27px;
			left: -12px;
			right: unset;
		}
		${Team}::before {
			top: -10px;
			right: -5px;
			left: unset;
		}
	}

	&:hover {
		${EditIcon} {
			opacity: 1;
		}
	}
`; 
