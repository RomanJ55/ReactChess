import React, { useEffect, useState } from "react";
import Square from "./Square";

const Board = ({ squares, rows, columns }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(squares);
  }, [squares]);

  let board = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let key = [i, j];
      let type = -1;
      let imagePath = "/pieces/dummy.png";
      let colorNum = -1;
      let player;
      let selected;

      if (data !== undefined && data.length > 1) {
        if (data[i][j]) {
          type = data[i][j].type;
          selected = data[i][j].selected;
          player = data[i][j].player;
          colorNum = player === "white" ? 0 : 1;
          imagePath = "/pieces/" + colorNum + "0" + type + ".png";
          if (type === 5 && data[i][j].incheck) {
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
