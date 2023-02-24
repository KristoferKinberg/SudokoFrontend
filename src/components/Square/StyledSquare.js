import styled from "styled-components";

export const squareSize = 50;
export const everyThird = [
    2,
    5,
    11,
    14,
    20,
    23,
    29,
    32,
    38,
    41,
    47,
    50,
    56,
    59,
    65,
    68,
    74,
    77,
]

export const StyledSquare = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${squareSize}px;
    width: ${squareSize}px;
    border: 1px solid white;
    color: white;
    ${({column}) => (everyThird.includes(column)) && "border-right: 5px solid white;"}

`;

export const StyledInput = styled.input`
  border: 0;
    color: white;
    height: ${squareSize}px;
    width: ${squareSize}px;
    background: transparent;
`;
