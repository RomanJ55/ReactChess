import React, { useState, useEffect } from "react";
import axios from "axios";

const Timer = ({ timer }) => {
  const [timerValue, setTimer] = useState(timer);
  useEffect(() => {
    setTimer(timer);
  }, [timer]);

  const timeoutHandler = () => {
    axios
      .post(`/api/chess/startend`, {
        command: "end",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (timer > 0) {
    let minutes = Math.floor(timerValue / 60);
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
  } else {
    timeoutHandler();
    return <h3>Time: Times up!</h3>;
  }
};

export default Timer;
