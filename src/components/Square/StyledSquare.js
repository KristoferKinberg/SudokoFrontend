import styled from "styled-components";
import {border} from "../Board/StyledBoard";

export const squareSize = 50;
export const indexForBorderRight = [2, 5, 11, 14,20,23,29,32,38,41,47,50,56,59,65,68,74,77];

export const StyledSquare = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${squareSize}px;
    width: ${squareSize}px;
    border: 1px solid rgba(255,125,255,.1);
    color: white;
    ${({column}) => (indexForBorderRight.includes(column)) && `border-right: ${border}`}

`;

export const StyledInput = styled.input`
  border: 0;
    color: white;
    height: ${squareSize}px;
    width: ${squareSize}px;
    background: transparent;
  text-align: center;
`;
