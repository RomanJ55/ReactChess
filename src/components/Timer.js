import React from "react";

const Timer = ({ timer, timeoutHandler }) => {
  if (timer >= 0) {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    return seconds > 9 ? (
      <h3>
        Time: {minutes}:{seconds}
      </h3>
    ) : (
      <h3>
        Time: {minutes}:0{seconds}
      </h3>
    );
  } else {
    timeoutHandler();
    return <h3>Time: Times up!</h3>;
  }
};

export default Timer;
