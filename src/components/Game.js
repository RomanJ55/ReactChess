import React, { useState, useEffect } from "react";
import { socket } from "../socket";
import Board from "./Board";
import Footer from "./Footer";
import End from "./End";
import Start from "./Start";
import { getRandomInt, animateError } from "../utils";
import Top from "./Top";

const Game = ({ items, updateData }) => {
  const [squares, setSquares] = useState([[]]);
  const [turn, setTurn] = useState([]);
  const [running, setRunning] = useState([]);
  const [winner, setWinner] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [gameRoom, setGameRoom] = useState(
    JSON.parse(sessionStorage.getItem("tempRoom"))
  );
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    setSquares(items.board);
    setTurn(items.turn);
    setRunning(items.game_running);
    setWinner(items.is_winner);
  }, [items.board, items.turn, items.game_running, items.is_winner]);

  useEffect(() => {
    getRoomData();
  });

  const giveUpHandler = () => {
    socket.emit("gameEnd");
    socket.on("gameEnd", (arg) => {
      if (arg === "game ended!") {
        socket.off("gameEnd");
        updateData();
      }
    });
  };

  const getRoomData = () => {
    socket.emit("roomData");
    socket.on("roomData", (data) => {
      socket.off("roomData");
      setRoomData(data);
    });
  };

  const createGameHandler = () => {
    const userInput = document.getElementById("uInput");
    if (playerName !== "") {
      const roomNumber = getRandomInt(10000000, 99999999);
      sessionStorage.setItem("tempRoom", roomNumber);

      const client = { username: playerName, room: roomNumber };

      socket.emit("join", client);
      socket.on("join", (joinData) => {
        if (joinData === "joined") {
          setGameRoom(roomNumber);
        } else {
          animateError(userInput, joinData);
        }
        socket.off("join");
      });
    } else {
      animateError(userInput, "Username required");
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

        socket.on("joinExisting", (data) => {
          if (data === "Username already exists") {
            const userInput = document.getElementById("uInput");
            animateError(userInput, data);
          } else if (data === `${playerName} joined`) {
            setGameRoom(JSON.parse(sessionStorage.getItem("tempRoom")));

            socket.emit("gameStart");
            socket.on("gameStart", (arg) => {
              if (arg === "game started!") {
                socket.off("gameStart");
                updateData();
              }
            });
          } else {
            const codeInput = document.getElementById("cInput");
            animateError(codeInput, data);
          }
          socket.off("joinExisting");
        });
      }
    } else {
      const userInput = document.getElementById("uInput");
      animateError(userInput, "Username required");
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
    setPlayerName(e.target.value.trim());
  };

  const codeInputChangeHandler = (e) => {
    sessionStorage.setItem("tempRoom", e.target.value);
  };

  return (
    <>
      {gameRoom !== null && running ? (
        <div className="game">
          <Top
            leaveRoomHandler={leaveRoomHandler}
            roomData={roomData}
            gameRoom={gameRoom}
            giveUpHandler={giveUpHandler}
            turn={turn}
            timer={items.timer}
          />
          <Board
            squares={squares}
            rows={items.rows}
            columns={items.columns}
            playerName={playerName}
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
          createGameHandler={createGameHandler}
          nameInputChangeHandler={nameInputChangeHandler}
          codeInputChangeHandler={codeInputChangeHandler}
          joinGameHandler={joinGameHandler}
        />
      )}
    </>
  );
};

export default Game;
