import React, { useState, useEffect } from "react";
import axios from "axios";
import Timer from "./Timer";
import Board from "./Board";
import Footer from "./Footer";
import End from "./End";
import Start from "./Start";

const Game = ({ items }) => {
  const [squares, setSquares] = useState([[]]);
  const [turn, setTurn] = useState([]);
  const [running, setRunning] = useState([]);
  const [winner, setWinner] = useState([]);
  // const [selectedSquare, setSelectedSquare] = useState(-1);

  useEffect(() => {
    setSquares(items.board);
    setTurn(items.turn);
    setRunning(items.game_running);
    setWinner(items.is_winner);
  }, [items.board, items.turn, items.game_running, items.is_winner]);

  const giveUpHandler = () => {
    axios
      .post(`https://chessapi55.herokuapp.com/api/chess/startend`, {
        command: "end",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const startGameHandler = () => {
    axios
      .post(`https://chessapi55.herokuapp.com/api/chess/startend`, {
        command: "start",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {running ? (
        <div className="game">
          <div className="top-timer">
            <Timer timer={items.black_time} timeoutHandler={giveUpHandler} />
          </div>
          <Board squares={squares} rows={items.rows} columns={items.columns} />
          <Footer
            turn={turn}
            whiteTime={items.white_time + 2}
            giveUpHandler={giveUpHandler}
          />
        </div>
      ) : winner ? (
        <End winner={items.winner} startGameHandler={startGameHandler} />
      ) : (
        <Start startGameHandler={startGameHandler} />
      )}
    </div>
  );
};

export default Game;
