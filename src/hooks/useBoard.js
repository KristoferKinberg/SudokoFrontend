import React from 'react';
import board from "../board.json";
import {INPUT_STATUS, STATUS} from "../constants";

const useBoard = () => {
  const createFormattedBoard = (board) => board
    .flat()
    .reduce((newBoard, value, index) => {
      return {
        ...newBoard,
        [index]: {
          value,
          disabled: value > 0,
          status: INPUT_STATUS.NOT_ASSIGNED
        }
      }
    }, {});

  const updateBoard = (board, key, values) => Object
    .values(values)
    .reduce((newBoard, { coordinate, status }) => {
      return {
        ...newBoard,
        [coordinate]: {
          ...newBoard[coordinate],
          [key]: status,
        }
      }
    }, board);


  const updateBoardStatus = (board, values) => updateBoard(board, STATUS, values);

  const getPlayedSquares = (board) => Object
    .values(board)
    .filter(({ status, value }) => status !== INPUT_STATUS.DISABLED && value > 0);

  const correctBoard = () => {
    console.log('correctBoard');
  }

  const correctGivenAnswers = () => {
    const playerAnswers = getPlayedSquares();
  }

  const formattedBoard = createFormattedBoard(board);
  const [playedBoard, setPlayedBoard] = React.useState(formattedBoard);

  const updateCell = (index, key, value) => {
    setPlayedBoard({
      ...playedBoard,
      [index]: {
        ...playedBoard[index],
        [key]: value,
      }
    })
  };

  return {
    board: playedBoard,
    correctGivenAnswers,
    updateCell,
    correctBoard,
  }
}

export default useBoard;
