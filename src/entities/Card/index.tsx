import React from "react";

import styles from "./styles.module.scss";

interface ICardProps {
  name: string;
  paragraph: string;
  iconType: string;
  icon: string;
}

export const Card: React.FC<ICardProps> = ({
  name,
  paragraph,
  iconType,
  icon,
}) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt={name} className={styles.card__icon} />
      <span className={styles.card__heading}>{name}</span>
    </div>
  );
};
