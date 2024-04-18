import React from 'react';
import Button from '@shared/ui/Buttons/DefaultReactButton';

import styles from './styles.module.scss';

export interface ICardProps {
  number: number;
  position: string;
  text: string;
  vacancyId: number;
}

const Card: React.FC<ICardProps> = ({ number, position, text, vacancyId }) => {
  const handleButtonClick = () => {
    window.location.href = "/vacancie-form";
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__number}>{number}</div>
      <span className={styles.card__heading}>{position}</span>
      <p className={styles.card__paragraph}>{text}</p>
      <Button buttonType="filled" text="Откликнуться" margin="mt-8" onClick={handleButtonClick} />
    </div>
  );
}

export default Card;
