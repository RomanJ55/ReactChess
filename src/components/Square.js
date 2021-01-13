import React from "react";
import { zoomIn, zoomInDown, flipInY } from "react-animations";
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
    zoom: {
      animationName: zoomIn,
      animationDuration: "1s",
    },
    zoomImg: {
      animationName: zoomInDown,
      animationDuration: "1.8s",
    },
    flip: {
      animationName: flipInY,
      animationDuration: "1s",
    },
  });

  return (
    <button
      className={[css(styles.zoom), cl].join(" ")}
      // className="square"
      style={{
        background: (j + i) % 2 ? "white" : "black",
        border: selected
          ? "4px solid rgb(255,255,0)"
          : "2px solid rgb(136, 127, 127)",
      }}
      onClick={clickHandler}
    >
      <img
        className={css(styles.zoomImg)}
        src={process.env.PUBLIC_URL + imagePath}
        alt={type}
      />
    </button>
  );
};

export default Square;
