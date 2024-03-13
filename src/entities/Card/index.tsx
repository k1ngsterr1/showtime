import React from "react";

import styles from "./styles.module.scss";

export interface ICardProps {
  name: string;
  paragraph: string;
  iconType: any;
  icon: any;
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
      <img src={iconType} alt={name} className={styles.card__icon_type} />
      <span className={styles.card__heading}>{name}</span>
      <p className={styles.card__paragraph}>{paragraph}</p>
    </div>
  );
};
