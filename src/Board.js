import React, { useState } from "react";
function Square(props) {
  return (
    <button
      className="square"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext]=useState(true);

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }
  function handleClick(i) {
    const sq=[...squares];
    sq[i]=xIsNext? 'X':'O';
    setSquares(squares=> sq);
    setxIsNext(!xIsNext);
  }

  const status = "Next player: "+(xIsNext? 'X':'O');

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
