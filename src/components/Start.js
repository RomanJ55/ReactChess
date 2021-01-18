import React from "react";
import { bounceIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import startImage from "../images/start_game.jpg";

const Start = ({
  startGameHandler,
  nameInputChangeHandler,
  codeInputChangeHandler,
  joinGameHandler,
}) => {
  const st = "start";
  const styles = StyleSheet.create({
    bounce: {
      animationName: bounceIn,
      animationDuration: "0.8s",
    },
  });

  return (
    <div className={[css(styles.bounce), st].join(" ")}>
      <img src={startImage} style={{ width: 700 }} alt="" />
      <input
        className="name-input"
        defaultValue="Choose a Username (required)"
        onFocus={(e) => (e.target.value = "")}
        onChange={nameInputChangeHandler}
      />
      <div className="start-footer">
        <input
          className="name-input"
          defaultValue="Enter a room-code"
          onFocus={(e) => (e.target.value = "")}
          onChange={codeInputChangeHandler}
        />
        <button className="se-button" onClick={joinGameHandler}>
          Join a room
        </button>
        <button
          className="se-button"
          onClick={startGameHandler}
          style={{ marginTop: 30 }}
        >
          Create new room
        </button>
      </div>
    </div>
  );
};

export default Start;
