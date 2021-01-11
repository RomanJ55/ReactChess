import React, { useState, useEffect } from "react";
import axios from "axios";

const Square = ({ j, i, imagePath, type, selected, player }) => {
  const [isSelected, select] = useState(selected);

  const clickHandler = () => {
    axios
      .post(`/api/chess/post`, {
        x: i,
        y: j,
        player: player,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    select(selected);
  }, [selected]);

  return (
    <button
      className="square"
      style={{
        background: (j + i) % 2 ? "black" : "white",
        border: isSelected
          ? "4px solid rgb(255,255,0)"
          : "2px solid rgb(136, 127, 127)",
      }}
      onClick={clickHandler}
    >
      <img src={process.env.PUBLIC_URL + imagePath} alt={type} />
    </button>
  );
};

export default Square;
