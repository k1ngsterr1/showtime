import React from "react";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { GameTypeTab } from "@entities/GameTypeTab";

export const CreateGamePopup = () => {
  return (
    <div className={styles.overlay}>
      <section className={styles.popup}>
        <div className="w-full flex items-center justify-between">
          <h1 className={styles.popup__heading}>Создание игры</h1>
          <FontAwesomeIcon className={styles.popup__icon} icon={faClose} />
        </div>
        <div className="w-full flex justify-between">
          <div className={styles.popup__tabs}>
            <GameTypeTab
              gameName="Городская мафия"
              onClick={() => console.log("aaa")}
              description="Играйте по правилам городской мафии"
            />
            <GameTypeTab
              gameName="Бункер"
              onClick={() => console.log("aaa")}
              description="Играйте по правилам мафии в бункере"
            />
            <GameTypeTab
              gameName="Классическая мафия"
              onClick={() => console.log("aaa")}
              description="Играйте по правилам классической мафии"
            />
          </div>
          <div className={styles.popup__content}></div>
        </div>
      </section>
    </div>
  );
};
