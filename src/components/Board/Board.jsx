import { StyledBoard } from "./StyledBoard";
import Square from "../Square/Square";
import React from 'react';
import {VALUE} from "../../constants";

const Board = ({
  updateCell,
  board
}) => {
  const onInput = (index) => (value) => updateCell(index, VALUE, value);

  const renderSquare = () => Object
    .values(board)
    .map(({ value, disabled }, i) =>
      <Square
        column={i}
        value={value}
        onInput={onInput(i)}
        disabled={disabled}

      />
    );

    return(<StyledBoard>
      {renderSquare()}
    </StyledBoard>);
}

export default Board;
