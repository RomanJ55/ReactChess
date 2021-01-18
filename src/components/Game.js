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
  const [playerName, setPlayerName] = useState("");
  const [gameRoom, setGameRoom] = useState(
    JSON.parse(sessionStorage.getItem("tempRoom"))
  );
  // const [selectedSquare, setSelectedSquare] = useState(-1);

  useEffect(() => {
    setSquares(items.board);
    setTurn(items.turn);
    setRunning(items.game_running);
    setWinner(items.is_winner);
  }, [items.board, items.turn, items.game_running, items.is_winner]);

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
    if (playerName !== "") {
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      };
      const roomNumber = getRandomInt(1000000, 9999999);
      sessionStorage.setItem("tempRoom", roomNumber);
      setGameRoom(roomNumber);
      const client = { username: playerName, room: roomNumber };

      socket.emit("join", client);
    }
  };

  const joinGameHandler = () => {
    if (playerName !== "") {
      if (sessionStorage.getItem("tempRoom") !== "") {
        const client = {
          username: playerName,
          room: sessionStorage.getItem("tempRoom"),
        };
        socket.emit("joinExisting", client);

        setGameRoom(JSON.parse(sessionStorage.getItem("tempRoom")));

        socket.emit("gameStart");
        socket.on("gameStart", (arg) => {
          if (arg === "game started!") {
            socket.off("gameStart");
            updateData();
          }
        });
      }
    }
  };

  const leaveRoomHandler = () => {
    socket.emit("leave", { username: playerName, room: gameRoom });
    sessionStorage.removeItem("tempRoom");
    setGameRoom(null);
    updateData();
  };

  const restartGameHandler = () => {};

  const nameInputChangeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  const codeInputChangeHandler = (e) => {
    sessionStorage.setItem("tempRoom", e.target.value);
  };

  return (
    <>
      {gameRoom !== null && running ? (
        <div className="game">
          <div className="top-area">
            <button
              className="gu-button"
              style={{ marginTop: 15 }}
              onClick={leaveRoomHandler}
            >
              Leave Room
            </button>
            <h2>Room: {gameRoom}</h2>
            <Timer
              position="top"
              timeoutHandler={giveUpHandler}
              run={turn === "black" ? true : false}
              timer={items.timer}
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
            timer={items.timer}
          />
        </div>
      ) : winner ? (
        <End
          winner={items.winner}
          restartGameHandler={startGameHandler}
          leaveRoomHandler={leaveRoomHandler}
        />
      ) : (
        <Start
          startGameHandler={startGameHandler}
          nameInputChangeHandler={nameInputChangeHandler}
          codeInputChangeHandler={codeInputChangeHandler}
          joinGameHandler={joinGameHandler}
        />
      )}
    </>
  );
};

export default Game;
