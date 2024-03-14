import React from "react";
import Button from "../../shared/ui/Buttons/DefaultButton/index.astro";

import styles from "../VacanciesCard/styles.modules.scss";

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
      <Button buttonType="filled" text="Связаться" />
    </div>
  );
};

export default Card;
