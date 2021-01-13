import React from "react";

const Turn = ({ turn }) => {
  const turnText = `${turn} Turn`;
  return <h2>{turnText.toUpperCase()}</h2>;
};

export default Turn;
