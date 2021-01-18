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
      <img src={startImage} alt="" />
      <input
        className="name-input"
        defaultValue="Choose a Username (required)"
        onFocus={(e) => (e.target.value = "")}
        onChange={nameInputChangeHandler}
      />
      <button
        className="se-button"
        onClick={startGameHandler}
        style={{ marginTop: 5 }}
      >
        Create new room
      </button>
      <div className="start-footer">
        <h2>Have a room code?</h2>
        <input
          className="name-input"
          defaultValue="Enter room code"
          onFocus={(e) => (e.target.value = "")}
          onChange={codeInputChangeHandler}
        />
        <button className="se-button" onClick={joinGameHandler}>
          Join a room
        </button>
      </div>
    </div>
  );
};

export default Start;
