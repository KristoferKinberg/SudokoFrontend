import styled from "styled-components";

const indexForBorderBottom = [2, 5];
export const border = "5px solid rgba(255,125,255,.5)";

export const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  border: ${border};
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  ${({row}) => (indexForBorderBottom.includes(row)) && `border-bottom: ${border};`}

`;
