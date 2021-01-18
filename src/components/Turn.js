import React from "react";
import { zoomInUp } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const Turn = ({ turn }) => {
  const styles = StyleSheet.create({
    bounce: {
      animationName: zoomInUp,
      animationDuration: "2.7s",
    },
  });

  const turnText =
    turn === "not started" ? "waiting for player..." : `${turn} Turn`;
  return <h2 className={css(styles.bounce)}>{turnText.toUpperCase()}</h2>;
};

export default Turn;
