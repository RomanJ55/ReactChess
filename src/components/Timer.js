import React, { useState, useEffect } from "react";
import { zoomInRight } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const Timer = ({ position, timeoutHandler, run }) => {
  const [time, setTime] = useState(
    JSON.parse(localStorage.getItem(position === "top" ? "b_time" : "w_time"))
  );
  const [isOn, setIsOn] = useState(run);

  useEffect(() => {
    setIsOn(run);
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        let storedTime = JSON.parse(
          localStorage.getItem(position === "top" ? "b_time" : "w_time")
        );
        setTime(storedTime - 1);
      }, 1000);
    } else if (!isOn && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, time, run, position]);

  useEffect(() => {
    localStorage.setItem(
      position === "top" ? "b_time" : "w_time",
      JSON.stringify(time)
    );
  }, [position, time]);

  const styles = StyleSheet.create({
    slide: {
      animationName: zoomInRight,
      animationDuration: "2.6s",
    },
  });

  if (time >= 0) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return seconds > 9 ? (
      <h3 className={css(styles.slide)}>
        Time: {minutes}:{seconds}
      </h3>
    ) : (
      <h3 className={css(styles.slide)}>
        Time: {minutes}:0{seconds}
      </h3>
    );
  } else {
    timeoutHandler();
    return <h3>Time: Times up!</h3>;
  }
};

export default Timer;
