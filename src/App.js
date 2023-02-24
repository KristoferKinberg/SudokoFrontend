import './App.css';
import Board from './components/Board/Board';
import useBoard from "./hooks/useBoard";
import {StyledButton} from "./components/Button/StyledButton";

function App() {
  const {board, updateCell, correctGivenAnswers, correctBoard} = useBoard();

  return board
    ? (
      <div className="App">
        <Board board={board} updateCell={updateCell}/>
        <StyledButton onClick={correctGivenAnswers}>Check answers</StyledButton>
        <StyledButton onClick={correctBoard}>Correct</StyledButton>
      </div>
    )
   : null;
}

export default App;
