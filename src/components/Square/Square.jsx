import {StyledInput, StyledSquare} from "./StyledSquare"

const Square = ({ column, value, onInput, disabled }) => {
  const validateInput = (inputValue) =>
    /^[1-9]$/.test(inputValue);

  const _onChange = ({ target: { value: v }}) => {
    const cleanedValue = parseInt(v, 10);
    validateInput(cleanedValue) && onInput(cleanedValue);
  }

  const getDisplayedValue = () => value > 0
    ? value
    : '';

  const renderValue = () => disabled
    ? value
    : <StyledInput
      type="number"
      value={getDisplayedValue()}
      onChange={_onChange}
      // Add status, style based on status
    />;

  return <StyledSquare column={column}>
    { renderValue() }
  </StyledSquare>
}

export default Square
