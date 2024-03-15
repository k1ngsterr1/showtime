import React from "react";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton/index";

import styles from "./styles.module.scss";

interface Props {
  photo: ImageMetadata;
  heading: string;
  paragraph: string;
  price: string;
}
export const ProductCard: React.FC<Props> = ({
  photo,
  heading,
  paragraph,
  price,
}) => {
  return (
    <div className={styles.card}>
      <img src={photo.src} alt="" />
      <span className={styles.card__heading}>{heading}</span>
      <span className={styles.card__paragraph}>{paragraph}</span>
      <span className="font-killbill text-2xl mt-4">{price}</span>
      <ReactButton margin="mt-4" text="Купить" buttonType="transparent" />
    </div>
  );
};
