import React from "react";

const Timer = ({ turn }) => {
  const turnText = `${turn} Turn`;
  return <h2>{turnText.toUpperCase()}</h2>;
};

export default Timer;
