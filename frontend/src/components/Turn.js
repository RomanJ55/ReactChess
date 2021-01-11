import React, { useState, useEffect } from "react";

const Turn = ({ turn }) => {
  const [turnValue, setTurn] = useState("white");

  useEffect(() => {
    setTurn(turn);
  }, [turn]);

  const turnText = `${turnValue} Turn`;
  return <h2>{turnText.toUpperCase()}</h2>;
};

export default Turn;
