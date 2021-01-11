import React, { useState, useEffect } from "react";

const Timer = ({ timer }) => {
  const [timerValue, setTimer] = useState(timer);
  useEffect(() => {
    setTimer(timer);
  }, [timer]);

  let minutes = timerValue / 60;
  let seconds = timerValue % 60;
  return seconds > 9 ? (
    <h3>
      Time: {minutes}:{seconds}
    </h3>
  ) : (
    <h3>
      Time: {minutes}:0{seconds}
    </h3>
  );
};

export default Timer;
