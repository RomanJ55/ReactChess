import React from "react";

const Square = ({ j, i, imagePath, type }) => {
  return (
    <button
      className="square"
      style={{ background: (j + i) % 2 ? "black" : "white" }}
    >
      <img src={imagePath} alt={type} />
    </button>
  );
};

export default Square;
