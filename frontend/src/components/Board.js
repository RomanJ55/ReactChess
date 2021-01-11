import React from "react";
import Square from "./Square";

const Board = ({ board, rows, columns }) => {
  let squares = [];
  console.log(board);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let key = [i, j];
      let type = -1;
      let imagePath = "pieces/dummy.png";
      let colorNum = -1;

      if (board[i][j]) {
        type = board[i][j].type;
        colorNum = board[i][j].player === "white" ? 0 : 1;
        imagePath = "pieces/" + colorNum + "0" + type + ".png";
      }

      squares.push(
        <Square key={key} j={j} i={i} imagePath={imagePath} type={type} />
      );
    }
  }

  return <div className="board">{squares}</div>;
};

export default Board;
