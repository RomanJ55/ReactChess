import React from "react";
import Square from "./Square";

const Board = ({ board, rows, columns }) => {
  let squares = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let key = [i, j];
      let type = -1;
      let imagePath = "/pieces/dummy.png";
      let colorNum = -1;
      let player;
      let selected;

      if (board[i][j]) {
        type = board[i][j].type;
        selected = board[i][j].selected;
        player = board[i][j].player;
        colorNum = player === "white" ? 0 : 1;
        imagePath = "/pieces/" + colorNum + "0" + type + ".png";
        if (type === 5 && board[i][j].incheck) {
          imagePath = "/pieces/" + colorNum + "0" + type + "c.png";
        }
      }

      squares.push(
        <Square
          key={key}
          j={j}
          i={i}
          imagePath={imagePath}
          type={type}
          selected={selected}
          player={player}
        />
      );
    }
  }

  return <div className="board">{squares}</div>;
};

export default Board;
