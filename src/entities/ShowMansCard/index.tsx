import React from "react";
import styles from "./styles.module.scss";

interface Props {
  photo: any;
  position: string;
  name: string;
}

const ShowMansCard: React.FC<Props> = ({ position, name, photo }) => {
  return (
    <div className={styles.card}>
      {/* Use photo.src instead of photo */}
      <img src={photo} alt={name} className={styles.shownmans_picture} />
      <span className={styles.card__name}>{name}</span>
      <span className={styles.card__position}>{position}</span>
    </div>
  );
};

export default ShowMansCard;
