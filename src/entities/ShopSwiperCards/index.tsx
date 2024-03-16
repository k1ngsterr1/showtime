import React from "react";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";

import styles from "./styles.module.scss";

export interface IShopCard {
  heading: string;
  photo: ImageMetadata;
  desc: string;
  price: string;
}

export const ShowCard: React.FC<IShopCard> = ({
  heading,
  desc,
  price,
  photo,
}) => {
  return (
    <div className={styles.card}>
      <img src={photo.src} className={styles.card__icon} />
      <span className={styles.card__icon_type}>{price}</span>
      <span className={styles.card__heading}>{heading}</span>
      <p className={styles.card__paragraph}>{desc}</p>
      <ReactButton margin="mt-8" buttonType="filled" text="Купить" />
    </div>
  );
};
