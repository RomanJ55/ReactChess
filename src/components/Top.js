import React from "react";
import Timer from "./Timer";
import spinner from "../images/spinner.gif";

const Top = ({
  leaveRoomHandler,
  roomData,
  gameRoom,
  giveUpHandler,
  turn,
  timer,
}) => {
  return (
    <div className="top-area">
      <button className="gu-button" onClick={leaveRoomHandler}>
        Leave room
      </button>
      <h3>{roomData[0]}</h3>
      <h2>Room: {gameRoom}</h2>
      {roomData[1] === "" ? (
        <img src={spinner} alt="waiting" id="spinner" />
      ) : (
        <h3>{roomData[1]}</h3>
      )}
      <Timer
        timeoutHandler={giveUpHandler}
        run={turn === "black" ? true : false}
        timer={timer}
      />
    </div>
  );
};

export default Top;
