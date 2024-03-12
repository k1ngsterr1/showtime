import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

import styles from "./styles.module.scss";

interface CounterProps {
  duration: number;
  end: number;
  text: string;
}

export const Counter: React.FC<CounterProps> = ({ duration, end, text }) => {
  const countUpRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.counter_container}`} ref={countUpRef}>
      {startCount ? (
        <>
          <CountUp
            className={styles.counter_container__counter}
            end={end}
            duration={duration}
          />
          <span className={`ml-3 ${styles.counter_container__counter}`}>
            {text}
          </span>
        </>
      ) : (
        <span className={styles.counter_container__counter}>0</span>
      )}
    </div>
  );
};
