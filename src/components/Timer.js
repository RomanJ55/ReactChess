import React, { useState, useEffect } from "react";

const Timer = ({ timer, timeoutHandler, run }) => {
  const [time, setTime] = useState(timer);
  const [isOn, setIsOn] = useState(run);

  useEffect(() => {
    setIsOn(run);
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isOn && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, time, run]);

  if (time >= 0) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

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
