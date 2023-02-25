import styled from "styled-components";
import {border} from "../Board/StyledBoard";

export const squareSize = 50;
export const indexForBorderRight = [2, 5, 11, 14,20,23,29,32,38,41,47,50,56,59,65,68,74,77];
const purpleBg = (opacity) =>  `rgba(255,125,255,${opacity})`

export const StyledSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${squareSize}px;
  width: ${squareSize}px;
  border: 1px solid ${purpleBg(.1)};
  color: white;

  ${({ disabled }) => !disabled 
    ? `
      cursor: pointer;
      font-weight: 900;
    `
    : 'color: rgba(255,255,255,.7);' 
  }
  ${({ column }) => (indexForBorderRight.includes(column)) && `border-right: ${border};`}
  ${({ isSelected }) => isSelected && `background: ${purpleBg(.2)};`}
`;
