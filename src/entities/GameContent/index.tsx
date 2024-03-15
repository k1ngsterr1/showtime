import React, { useState } from "react";

import styles from "./styles.module.scss";
import { PlayersCounter } from "@entities/PlayersCounter";

interface IGameContentProps {
  gameType: string;
}

export const GameContent: React.FC<IGameContentProps> = ({ gameType }) => {
  const [playerCount, setPlayerCount] = useState(8); // Initial count

  const handleIncrement = () => {
    setPlayerCount((prevCount) => (prevCount < 16 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setPlayerCount((prevCount) => (prevCount > 8 ? prevCount - 1 : prevCount));
  };

  const renderContent = () => {
    switch (gameType) {
      case "urban":
        return (
          <div className={styles.urban_content}>
            <h3 className={styles.urban_content__heading}>
              Режим: "Городская мафия"
            </h3>
            <div className="w-[90%] flex items-center justify-between mt-4">
              <span className={styles.urban_content__players}>Игроки</span>
              <PlayersCounter />
            </div>
          </div>
        );
      case "bunker":
        return <div>Content for Бункер</div>;
      case "classic":
        return <div>Content for Классическая мафия</div>;
      default:
        return <div>Select a game type to see the rules and setup.</div>;
    }
  };

  return <>{renderContent()}</>;
};
