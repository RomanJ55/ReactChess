import React, { useState } from "react";

const Square = ({ j, i, imagePath, type }) => {
  const [selected, select] = useState(false);

  const clickHandler = () => {
    if (selected) {
      select(false);
    } else {
      select(true);
    }
  };

  return (
    <button
      className="square"
      style={{ background: (j + i) % 2 ? "black" : "white" }}
      onClick={clickHandler}
    >
      <img src={process.env.PUBLIC_URL + imagePath} alt={type} />
    </button>
  );
};

export default Square;
