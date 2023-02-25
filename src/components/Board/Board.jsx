import {StyledBoard, StyledRow} from "./StyledBoard";
import Square from "../Square/Square";
import React from 'react';
import {BACKSPACE, VALUE} from "../../constants";
import {useKeyPress} from "../../hooks/useKeypress";

const validKeys = ["1","2","3","4","5","6","7","8","9", BACKSPACE];

const Board = ({
  updateCell,
  board
}) => {
  const [selectedSquare, setSelectedSquare] = React.useState(null);
  const { keyPressed } = useKeyPress(validKeys);

  const getSquare = (index) => board[index];

  const isSelectedSquare = (index) => !!selectedSquare && index === selectedSquare;

  const onSelectSquare = (index) => () => !getSquare(index).disabled && setSelectedSquare(index);

  const onInput = (value) => {
    const cleanedInput = value === BACKSPACE
      ? ''
      : value;

    selectedSquare && updateCell(selectedSquare, VALUE, cleanedInput);
  }

  React.useEffect(() => {
    onInput(keyPressed);
  }, [keyPressed]);

  const renderSquare = ({ index, value, disabled }) => <Square
    column={index}
    value={value}
    disabled={disabled}
    onClick={onSelectSquare(index)}
    isSelected={isSelectedSquare(index)}
  />;

  const createRows = () => Object
    .values(board)
    .reduce((acc, curr, index) => {
      const subarrayIndex = Math.floor(index / 9);
      if (!acc[subarrayIndex]) {
        acc[subarrayIndex] = [];
      }
      acc[subarrayIndex].push(renderSquare({ ...curr, index }));
      return acc;
    }, []);

  const renderRows = () => createRows().map((squares, index) => <StyledRow row={index}>
    {squares}
  </StyledRow>);

  return <StyledBoard>
    {renderRows()}
  </StyledBoard>;
}

export default Board;
