import React from "react";
import { bounceIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import startImage from "../images/start_game.jpg";

const Start = ({ startGameHandler }) => {
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
      <button className="se-button" onClick={startGameHandler}>
        Start game
      </button>
    </div>
  );
};

export default Start;
