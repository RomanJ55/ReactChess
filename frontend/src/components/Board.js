import React from "react";

const Board = ({ board, rows, columns }) => {
  let boardRows = [];
  let squares = [];

  for (let j = 0; j < columns; j++) {
    squares.push(
      <button key={j} className="square">
        {j}
      </button>
    );
  }

  for (let i = 0; i < rows; i++) {
    boardRows.push(
      <div key={i} className="board-row">
        {squares}
      </div>
    );
  }

  return <div>{boardRows}</div>;
};

export default Board;
