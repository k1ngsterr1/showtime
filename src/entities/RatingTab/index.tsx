import React from "react";
import { RatingHeader } from "@shared/ui/RatingHeader";

import styles from "./styles.module.scss";

import Cub from "@assets/Main/cub.svg";

export const RatingTab = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <RatingHeader
          kfc="0.3"
          wins="52"
          icon={Cub.src}
          margin="mt-8"
          name="Ruslan Islam"
          number="1"
          games="100"
        />
        <RatingHeader
          kfc="0.4"
          wins="52"
          icon={Cub.src}
          margin="mt-4"
          name="Baida Baidarka"
          number="2"
          games="100"
        />
        <RatingHeader
          kfc="0.9"
          wins="52"
          icon={Cub.src}
          margin="mt-4"
          name="Artyom Billy"
          number="3"
          games="100"
        />
        <RatingHeader
          kfc="0.6"
          wins="52"
          icon={Cub.src}
          margin="mt-4"
          name="Goidaaaaaa"
          number="4"
          games="100"
        />
      </div>
    </div>
  );
};
