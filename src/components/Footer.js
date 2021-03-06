import React from "react";
import Timer from "./Timer";
import Turn from "./Turn";

const Footer = ({ turn, giveUpHandler, run, timer }) => {
  return (
    <div className="footer">
      <button
        className="gu-button"
        onClick={giveUpHandler}
        disabled={turn === "not started" ? true : false}
      >
        Give up
      </button>
      <Turn turn={turn} />
      <Timer timeoutHandler={giveUpHandler} run={run} timer={timer} />
    </div>
  );
};

export default Footer;
