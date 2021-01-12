import React from "react";
import wWon from "../images/w_won.png";
import bWon from "../images/b_won.png";

const End = ({ winner, startGameHandler }) => {
  let winnerLabel = "Winner: " + winner;

  return (
    <div className="start">
      <h1 className="center" style={{ fontSize: 50 }}>
        {winnerLabel.toUpperCase()}
      </h1>
      <img
        src={winner === "white" ? wWon : bWon}
        alt=""
        style={{ width: 320, padding: 3 }}
      />
      <button className="se-button" onClick={startGameHandler}>
        Play again
      </button>
    </div>
  );
};

export default End;
