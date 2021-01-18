import React, { useState, useEffect } from "react";
import { socket } from "../socket";
import Timer from "./Timer";
import Board from "./Board";
import Footer from "./Footer";
import End from "./End";
import Start from "./Start";
import { getRandomInt } from "../utils";

const Game = ({ items, updateData }) => {
  const [squares, setSquares] = useState([[]]);
  const [turn, setTurn] = useState([]);
  const [running, setRunning] = useState([]);
  const [winner, setWinner] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [gameRoom, setGameRoom] = useState(
    JSON.parse(sessionStorage.getItem("tempRoom"))
  );

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
      const roomNumber = getRandomInt(10000000, 99999999);
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

  const restartGameHandler = () => {
    socket.emit("restart");
    socket.on("restart", (data) => {
      if (data === "game restarted") {
        socket.off("restart");
        updateData();
      }
    });
  };

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
            <button className="gu-button" onClick={leaveRoomHandler}>
              Leave Room
            </button>
            <h2>Room: {gameRoom}</h2>
            <Timer
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
            run={turn === "white" ? true : false}
            giveUpHandler={giveUpHandler}
            timer={items.timer}
          />
        </div>
      ) : winner ? (
        <End
          winner={items.winner}
          restartGameHandler={restartGameHandler}
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
