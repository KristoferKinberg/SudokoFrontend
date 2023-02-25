import {StyledSquare} from "./StyledSquare"

const Square = ({ column, onClick, value, disabled, isSelected }) => {
  const renderValue = () => !!value && value;

  return <StyledSquare
    column={column}
    onClick={onClick}
    isSelected={isSelected}
    disabled={disabled}
  >
    { renderValue() }
  </StyledSquare>
}

export default Square
