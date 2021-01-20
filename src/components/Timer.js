import React, { useState, useEffect } from "react";
import { zoomInRight } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import clock from "../images/clock.png";
import clockTick from "../images/clock_tick.gif";

const Timer = ({ timeoutHandler, run, timer }) => {
  const [time, setTime] = useState(timer);
  const [isOn, setIsOn] = useState(run);

  const cl = "timer-area";

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

  const styles = StyleSheet.create({
    slide: { animationName: zoomInRight, animationDuration: "2.6s" },
  });

  if (time >= 0) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return seconds > 9 ? (
      <div className={[css(styles.slide), cl].join(" ")}>
        <img src={isOn ? clockTick : clock} alt="Time" className="clock" />
        <h3>
          {minutes}:{seconds}
        </h3>
      </div>
    ) : (
      <div className={[css(styles.slide), cl].join(" ")}>
        <img src={isOn ? clockTick : clock} alt="Time" className="clock" />
        <h3>
          {minutes}:0{seconds}
        </h3>
      </div>
    );
  } else {
    timeoutHandler();
    return (
      <div className={cl}>
        <img src={isOn ? clockTick : clock} alt="Time" className="clock" />
        <h3>Times up!</h3>
      </div>
    );
  }
};

export default Timer;
