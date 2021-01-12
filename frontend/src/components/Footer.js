import React from "react";
import Timer from "./Timer";
import Turn from "./Turn";

const Footer = ({ turn, whiteTime, giveUpHandler }) => {
  return (
    <div className="footer">
      <button className="gu-button" onClick={giveUpHandler}>
        Give up
      </button>
      <Turn turn={turn} />
      <Timer timer={whiteTime} timeoutHandler={giveUpHandler} />
    </div>
  );
};

export default Footer;
