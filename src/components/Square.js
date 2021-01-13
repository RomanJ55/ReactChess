import React from "react";
import { zoomInLeft, zoomInDown } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import axios from "axios";

const Square = ({ j, i, imagePath, type, selected, player }) => {
  let cl = "square";
  const clickHandler = () => {
    axios
      .post(`https://chessapi55.herokuapp.com/api/chess/post`, {
        x: i,
        y: j,
        player: player,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const styles = StyleSheet.create({
    bounce: {
      animationName: zoomInLeft,
      animationDuration: "1.3s",
    },
    jump: {
      animationName: zoomInDown,
      animationDuration: "2s",
    },
  });

  return (
    <button
      className={[css(styles.bounce), cl].join(" ")}
      style={{
        background: (j + i) % 2 ? "white" : "black",
        border: selected
          ? "4px solid rgb(255,255,0)"
          : "2px solid rgb(136, 127, 127)",
      }}
      onClick={clickHandler}
    >
      <img
        className={css(styles.jump)}
        src={process.env.PUBLIC_URL + imagePath}
        alt={type}
      />
    </button>
  );
};

export default Square;
