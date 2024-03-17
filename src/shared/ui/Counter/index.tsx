import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

import styles from "./styles.module.scss";

interface CounterProps {
  duration: number;
  end: number;
  text: string;
  paragraphText: string;
  margin?: string;
  align?: string;
  width?: string;
}

export const Counter: React.FC<CounterProps> = ({
  margin,
  paragraphText,
  align,
  width,
  duration,
  end,
  text,
}) => {
  const countUpRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const paragraphClass = `${styles.paragraph} ${
    styles[`${styles.paragraph}`]
  } ${margin ? margin : ""} ${width} ${align}`;

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
    <div className="flex items-start justify-center flex-col">
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
      <p className={paragraphClass} style={{ width: width }}>
        {paragraphText}
      </p>
    </div>
  );
};
