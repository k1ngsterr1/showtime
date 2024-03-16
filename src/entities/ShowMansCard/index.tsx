import React from "react";
import styles from "./styles.module.scss";

interface Props {
  photo: ImageMetadata;
  position: string;
  name: string;
}

const ShowMansCard: React.FC<Props> = ({ position, name, photo }) => {
  return (
    <div className={styles.card}>
      <img src={photo.src} alt={name} className={styles.card_picture} />
      <span className={styles.card__name}>{name}</span>
      <span className={styles.card__position}>{position}</span>
    </div>
  );
};

export default ShowMansCard;
