import React from "react";
import Square from "./Square";

const Board = ({ squares, rows, columns }) => {
  let board = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let key = [i, j];
      let type = -1;
      let imagePath = "/pieces/dummy.png";
      let colorNum = -1;
      let player;
      let selected;

      if (!squares === undefined) {
        if (squares[i][j]) {
          type = squares[i][j].type;
          selected = squares[i][j].selected;
          player = squares[i][j].player;
          colorNum = player === "white" ? 0 : 1;
          imagePath = "/pieces/" + colorNum + "0" + type + ".png";
          if (type === 5 && squares[i][j].incheck) {
            imagePath = "/pieces/" + colorNum + "0" + type + "c.png";
          }
        }
      }

      board.push(
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

  return <div className="board">{board}</div>;
};

export default Board;
