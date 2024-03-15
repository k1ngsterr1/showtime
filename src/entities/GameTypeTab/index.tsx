import React from "react";

import styles from "./styles.module.scss";

interface IGameTypeTabProps {
  gameName: string;
  description: string;
  onClick: () => void;
}

export const GameTypeTab: React.FC<IGameTypeTabProps> = ({
  gameName,
  onClick,
  description,
}) => {
  return (
    <button className={styles.game_type_tab} onClick={onClick}>
      <strong className={styles.game_type_tab__name}>{gameName}</strong>
      <p className={styles.game_type_tab__description}>{description}</p>
    </button>
  );
};
