import {StyledBoard, StyledRow} from "./StyledBoard";
import Square from "../Square/Square";
import React from 'react';
import {VALUE} from "../../constants";

const Board = ({
  updateCell,
  board
}) => {
  const onInput = (index) => (value) => updateCell(index, VALUE, value);

  const renderSquare = ({ index, value, disabled }) => <Square
    column={index}
    value={value}
    onInput={onInput(index)}
    disabled={disabled}
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
