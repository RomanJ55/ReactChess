import React from "react";

const Board = ({ board, rows, columns }) => {
  let squares = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let key = [i, j];
      squares.push(
        <button
          key={key}
          className="square"
          style={{ background: (j + i) % 2 ? "black" : "white" }}
        >
          {key[0]},{key[1]}
        </button>
      );
    }
  }

  for (let i = 0; i < rows; i++) {}

  return <div className="board">{squares}</div>;
};

export default Board;
