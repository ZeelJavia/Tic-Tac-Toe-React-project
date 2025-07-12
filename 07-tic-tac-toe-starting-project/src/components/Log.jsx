export default function Log({ turns , player }) {
  return (
    console.log(turns),
    <ol id="log">
      {turns.map((turn , index) => 
          <li key={`${turn.square.row}${turn.square.col}`}> {player[turn.player]} selected ({turn.square.row},{turn.square.col})</li>
      )}
    </ol>
  )
}