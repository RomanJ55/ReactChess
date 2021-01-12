import React from "react";
import axios from "axios";
import Timer from "./Timer";
import Turn from "./Turn";
import Board from "./Board";
import Start from "./Start";
import End from "./End";

const Game = ({ items, isLoading }) => {
  const startGameHandler = () => {
    axios
      .post(`https://reactchess55.herokuapp.com/api/chess/startend`, {
        command: "start",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const giveUpHandler = () => {
    axios
      .post(`https://reactchess55.herokuapp.com/api/chess/startend`, {
        command: "end",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return isLoading ? (
    <h3 className="center" style={{ marginTop: 200, fontSize: 40 }}>
      Loading.....
    </h3>
  ) : items.game_running ? (
    <div className="game">
      <div className="top-timer">
        <Timer timer={items.black_time} />
      </div>
      <Board board={items.board} rows={items.rows} columns={items.columns} />
      <div className="footer">
        <button className="gu-button" onClick={giveUpHandler}>
          Give up
        </button>
        <Turn turn={items.turn} />
        <Timer timer={items.white_time} />
      </div>
    </div>
  ) : items.is_winner ? (
    <End startGameHandler={startGameHandler} winner={items.winner} />
  ) : (
    <Start startGameHandler={startGameHandler} />
  );
};

export default Game;
