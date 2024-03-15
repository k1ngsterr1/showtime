import React from "react";
import { HelpCard } from "@entities/HelpCard";
import { GameProfile } from "@entities/GameProfile";

import styles from "./styles.module.scss";
import { Lobby } from "@features/Lobby";

export const GameScreen = () => {
  return (
    <div className={styles.game}>
      <div className={styles.game__main_content}>
        <HelpCard
          text="Узнайте главные правила игры в мафию за 5 минут"
          paragraph="В разделе «правила», который мы составили для новых игроков"
          linkText="Узнать"
          href="/"
        />
        <Lobby />
      </div>
    </div>
  );
};
