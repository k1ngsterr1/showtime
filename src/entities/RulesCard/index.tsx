import React from "react";

import styles from "./styles.module.scss";

export interface ICardProps {
  number: string;
  name: string;
  paragraph: string;
}

const Card: React.FC<ICardProps> = ({ number, name, paragraph }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__number}>{number}</div>
      <span className={styles.card__heading}>{name}</span>
      <p className={styles.card__paragraph}>{paragraph}</p>
    </div>
  );
};

export default Card;
