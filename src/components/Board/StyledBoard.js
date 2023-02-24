import styled from "styled-components";
import {squareSize} from "../Square/StyledSquare";

export const StyledBoard = styled.div`
  display: flex;
  flex-direction: row;
  width: ${squareSize * 10}px;
  height: ${squareSize * 10}px;
  flex-wrap: wrap;
`;
