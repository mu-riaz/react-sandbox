import React, { useState } from "react";
function renderSquare(i) {
  return <Square value={i} />;
}
function Square(props) {
  const [mark, setMark] = useState(null);
  return (
    <button className="square" onClick={() => setMark("X")}>
      {mark}
    </button>
  );
}
function Board() {
  const status = "Next player: X";

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

export default Board;
