import React from "react";

import styles from "./styles.module.scss";
import { LobbyTab } from "@entities/LobbyTab";

interface ILobbiesProps {
  lobbies: any[];
}

export const LobbiesBoard = () => {
  return (
    <section className={styles.lobbies}>
      <div className={styles.lobbies__upper_line}>
        <span className={styles.lobbies__upper_line__text}>Название игры</span>
        <span className={styles.lobbies__upper_line__text}>Тип</span>
        <span className={styles.lobbies__upper_line__text}>Кол-во игроков</span>
      </div>
      <div className={styles.lobbies__tabs}>
        {/* <LobbyTab
          type="Классическая"
          name="Мафия"
          quantity="16/16"
          status="Онлайн"
        /> */}
      </div>
    </section>
  );
};
