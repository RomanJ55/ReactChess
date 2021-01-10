import React from "react";
import Timer from "./Timer";
import Turn from "./Turn";
import Board from "./Board";

const Game = ({ items, isLoading }) => {
  return isLoading ? (
    <h3>Loading.....</h3>
  ) : (
    <div className="game">
      <div class="top-timer">
        <Timer timer={items.white_time} />
      </div>

      <Board board={items.board} rows={items.rows} columns={items.columns} />
      <div className="footer">
        <button className="gu-button">Give up</button>
        <Turn turn={items.turn} />
        <Timer timer={items.black_time} />
      </div>
    </div>
  );
};

export default Game;
