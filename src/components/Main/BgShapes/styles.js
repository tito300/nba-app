import styled from "styled-components";
import { COLORS } from "../../../styles";


export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`
export const Shape = styled.div`
    width: 100%;
    height: 100vh;
    clip-path: polygon(100% 0, 100% 46%, 0 95%, 0 43%, 57% 0);  
    background-color: ${COLORS.SECONDARY};
    opacity: 0.05;
`