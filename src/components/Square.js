import React from "react";
import { socket } from "../socket";
import { zoomIn, zoomInDown } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { animateError } from "../utils";

const Square = ({
  j,
  i,
  imagePath,
  type,
  selected,
  player,
  playerName,
  updateData,
}) => {
  let cl = "square";

  const clickHandler = () => {
    socket.emit("clicked", {
      x: i,
      y: j,
      player: player,
      name: playerName,
    });
    socket.on("clicked", (arg) => {
      if (arg === "Done!") {
        updateData();
      } else {
        const turnDisplay = document.getElementById("turnDisplay");
        animateError(turnDisplay, turnDisplay.innerHTML);
      }
      socket.off("clicked");
    });
  };

  const styles = StyleSheet.create({
    zoom: { animationName: zoomIn, animationDuration: "3s" },
    zoomImg: { animationName: zoomInDown, animationDuration: "2.5s" },
  });

  return (
    <button
      className={[css(styles.zoom), cl].join(" ")}
      style={{
        background: (j + i) % 2 ? "black" : "white",
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
