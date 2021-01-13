import React from "react";
import axios from "axios";

const Square = ({ j, i, imagePath, type, selected, player }) => {
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

  return (
    <button
      className="square"
      style={{
        background: (j + i) % 2 ? "white" : "black",
        border: selected
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
