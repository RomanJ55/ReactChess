import React, { useState, useEffect } from "react";
import { socket } from "../socket";
import Timer from "./Timer";
import Board from "./Board";
import Footer from "./Footer";
import End from "./End";
import Start from "./Start";

const Game = ({ items, updateData }) => {
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

  if (localStorage.getItem("b_time") === null) {
    localStorage.setItem("b_time", JSON.stringify(items.timer));
  }
  if (localStorage.getItem("w_time") === null) {
    localStorage.setItem("w_time", JSON.stringify(items.timer + 2));
  }

  const giveUpHandler = () => {
    socket.emit("gameEnd");
    socket.on("gameEnd", (arg) => {
      if (arg === "game ended!") {
        socket.off("gameEnd");
        updateData();
      }
    });
  };

  const startGameHandler = () => {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };
    const roomNumber = getRandomInt(1, 999);

    const client = { username: "RomJ", room: `abc${roomNumber}` };

    socket.emit("join", client);
    socket.emit("gameStart");
    socket.on("gameStart", (arg) => {
      if (arg === "game started!") {
        socket.off("gameStart");
        updateData();
      }
    });
    localStorage.removeItem("b_time");
    localStorage.removeItem("w_time");
  };

  return (
    <>
      {running ? (
        <div className="game">
          <div className="top-timer">
            <Timer
              position="top"
              timeoutHandler={giveUpHandler}
              run={turn === "white" ? false : true}
            />
          </div>
          <Board
            squares={squares}
            rows={items.rows}
            columns={items.columns}
            updateData={updateData}
          />
          <Footer
            turn={turn}
            position="bottom"
            run={turn === "white" ? true : false}
            giveUpHandler={giveUpHandler}
          />
        </div>
      ) : winner ? (
        <End winner={items.winner} startGameHandler={startGameHandler} />
      ) : (
        <Start startGameHandler={startGameHandler} />
      )}
    </>
  );
};

export default Game;
