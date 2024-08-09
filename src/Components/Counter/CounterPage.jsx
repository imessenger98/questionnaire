/*
 * Author MUHAMMED YAZEEN AN
 * Created on Fri Aug 09 2024
 */
import PropTypes from "prop-types";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./Counter.module.css";
import { useState, useEffect } from "react";

const Counter = ({
  handleComplete = () => {
    console.error("Timer completed, but no handleComplete function was provided.");
  },
  duration = 5,
  colors = "#fff",
  trailColor = "#FFFFFF33",
  resetFlag = false,
  setResetCounter,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (resetFlag) {
      setKey((prevKey) => prevKey + 1);
      setResetCounter(false);
    }
  }, [resetFlag, setResetCounter]);

  const size = isMobile ? 80 : 144;
  const strokeWidth = isMobile ? 4 : 8;

  return (
    <div className={styles.timerContainer}>
      <CountdownCircleTimer
        key={key}
        isPlaying={!resetFlag}
        duration={duration}
        colors={colors}
        onComplete={handleComplete}
        trailColor={trailColor}
        strokeWidth={strokeWidth}
        size={size}
      >
        {({ remainingTime }) => (
          <div className={styles.timerText}>
            <span className={styles.timerFont}>{remainingTime}</span>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

Counter.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  setResetCounter: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  colors: PropTypes.string,
  trailColor: PropTypes.string,
  resetFlag: PropTypes.any,
};

export default Counter;
