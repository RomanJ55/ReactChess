import React from "react";
import startImage from "../images/start_game.jpg";

const Start = ({ startGameHandler }) => {
  return (
    <div className="start">
      <img src={startImage} style={{ width: 700 }} alt="" />
      <button className="se-button" onClick={startGameHandler}>
        Start game
      </button>
    </div>
  );
};

export default Start;
