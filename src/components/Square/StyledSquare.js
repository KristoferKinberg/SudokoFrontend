import styled from "styled-components"


export const StyledSquare = styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid white;
    ${({column}) => (column === 2 || column === 5) && "border-right: 5px solid white"}
`