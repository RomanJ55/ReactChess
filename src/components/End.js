import React from "react";
import { bounceIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import wWon from "../images/w_won.png";
import bWon from "../images/b_won.png";

const End = ({ winner, restartGameHandler, leaveRoomHandler }) => {
  let winnerLabel = "Winner: " + winner;
  let st = "start";

  const styles = StyleSheet.create({
    bounce: {
      animationName: bounceIn,
      animationDuration: "0.8s",
    },
  });

  return (
    <div className={[css(styles.bounce), st].join(" ")}>
      <h1 className="center">{winnerLabel.toUpperCase()}</h1>
      <img
        src={winner === "white" ? wWon : bWon}
        alt=""
        style={{ padding: 3 }}
      />
      <button className="se-button" onClick={restartGameHandler}>
        Play again
      </button>
      <button className="se-button" onClick={leaveRoomHandler}>
        Leave room
      </button>
    </div>
  );
};

export default End;
