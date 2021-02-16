import styled from "styled-components";
import { BREAK_POINTS } from '../../styles/index';

export const Container = styled.div`
	height: 100%;
	min-height: 100vh;
	width: 100%;
	margin: 0 auto;
	padding: 0 1rem;

	@media (min-width: ${BREAK_POINTS.LG}){
		max-width: 1400px;
	}

`