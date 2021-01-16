import React from "react";
import Timer from "./Timer";
import Turn from "./Turn";

const Footer = ({ turn, position, giveUpHandler, run }) => {
  return (
    <div className="footer">
      <button className="gu-button" onClick={giveUpHandler}>
        Give up
      </button>
      <Turn turn={turn} />
      <Timer position={position} timeoutHandler={giveUpHandler} run={run} />
    </div>
  );
};

export default Footer;
