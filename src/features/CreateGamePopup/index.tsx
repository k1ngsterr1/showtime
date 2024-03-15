import React, { useState, type SyntheticEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { GameTypeTab } from "@entities/GameTypeTab";
import { GameContent } from "@entities/GameContent";
import { useGameType } from "@shared/lib/hooks/useSwitchGameType";

import styles from "./styles.module.scss";

interface ICreateGamePopupProps {
  onClick: () => void;
}

export const CreateGamePopup: React.FC<ICreateGamePopupProps> = ({
  onClick,
}) => {
  const { gameType, selectGameType } = useGameType();

  const handleOverlayClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <section className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className="w-full flex items-center justify-between">
          <h1 className={styles.popup__heading}>Создание игры</h1>
          <FontAwesomeIcon
            className={styles.popup__icon}
            icon={faClose}
            onClick={onClick}
          />
        </div>
        <div className="w-full flex justify-between">
          <div className={styles.popup__tabs}>
            <GameTypeTab
              gameName="Городская мафия"
              onClick={() => selectGameType("urban")}
              isActive={gameType === "urban"}
              description="Играйте по правилам городской мафии"
            />
            <GameTypeTab
              gameName="Бункер"
              onClick={() => selectGameType("bunker")}
              isActive={gameType === "bunker"}
              description="Играйте по правилам мафии в бункере"
            />
            <GameTypeTab
              gameName="Классическая мафия"
              onClick={() => selectGameType("classic")}
              isActive={gameType === "classic"}
              description="Играйте по правилам классической мафии"
            />
          </div>
          <div className={styles.popup__content}>
            <GameContent gameType={gameType} />
          </div>
        </div>
      </section>
    </div>
  );
};
