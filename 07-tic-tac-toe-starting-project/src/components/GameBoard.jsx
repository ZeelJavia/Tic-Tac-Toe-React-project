
export default function GameBoard({ onSelectSquare , board }) {

  // let gameBoard = initialGameBoard

  // for(const turn of turns) {
  //   const { square, player } = turn;
  //   const {row , col} = square;
  //   gameBoard[row][col] = player;
  // } 
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map((innerArr) => [...innerArr])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndx) => (
        <li key={rowIndx}>
          <ol>
            {row.map((playerSymbol, colIndx) => (
              <li key={colIndx}>
                <button onClick={() => onSelectSquare(rowIndx , colIndx)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
