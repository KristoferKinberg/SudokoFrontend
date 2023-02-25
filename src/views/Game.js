import React from 'react';
import Board from "../components/Board/Board";
import {StyledButton} from "../components/Button/StyledButton";
import useBoard from "../hooks/useBoard";
import {StyledButtonWrapper, StyledGame} from "./StyledGame";

const Game = () => {
  const { board, updateCell, correctGivenAnswers, correctBoard } = useBoard();

  const renderBoard = () => board
    ? <Board board={board} updateCell={updateCell}/>
    : null

  return <StyledGame>
    { renderBoard() }
    <StyledButtonWrapper>
      <StyledButton onClick={correctGivenAnswers}>Check answers</StyledButton>
      <StyledButton onClick={correctBoard}>Correct</StyledButton>
    </StyledButtonWrapper>
  </StyledGame>
}

export default Game;
