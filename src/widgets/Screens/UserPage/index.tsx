import React from "react";
import bgImage from "@assets/Main/mafia_shadow.webp";

import styles from "./styles.module.scss";

export const UserScreen = () => {
  return (
    <main className={styles.user_screen}>
      <div className={styles.user_screen__container}></div>
      <div className={styles.user_screen__upper}></div>
      <img
        src={bgImage.src}
        className={styles.user_screen__bg}
        alt="mafia_bg_image"
      />
    </main>
  );
};
