import styled from 'styled-components';
import { COLORS } from '../../../styles';

export const ErrorContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: ${COLORS.DANGER};
    margin-bottom: 1rem;
`

export const ErrorText = styled.p`
    color: ${COLORS.DANGER_DARK};
    padding: ${props => props.small ? `0 0.35rem` : `0 1rem` };
    font-size: ${props => props.small ? `0.75rem` : 'auto' };
`

export const Close = styled.span`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    color: ${COLORS.DANGER_DARK};
    cursor: pointer;
`