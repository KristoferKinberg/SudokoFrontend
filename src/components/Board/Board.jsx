import { StyledBoard } from "./StyledBoard";
import Square from "../Square/Square";

const Board = () => {
    const renderRow = () =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => <Square column={i}/>)

    return( <StyledBoard>
        {renderRow()}
    </StyledBoard>)
}

export default Board;