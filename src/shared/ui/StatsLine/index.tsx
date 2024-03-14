import React from "react";
import styles from "./styles.module.scss";

interface IStatsLineProps {
  title: string;
  value: string;
}

export const StatsLine: React.FC<IStatsLineProps> = ({ title, value }) => {
  return (
    <span className={`${styles.line} mt-5 w-full`}>
      {title} <strong className="text-primary-red">{value}</strong>
    </span>
  );
};
