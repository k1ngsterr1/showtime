import React from "react";

import styles from "./styles.module.scss";

interface ILobbyTabProps {
  name: string;
  status: string;
  type: string;
  quantity: string;
}

export const LobbyTab: React.FC<ILobbyTabProps> = ({
  name,
  status,
  type,
  quantity,
}) => {
  return (
    <div className={styles.lobby_tab}>
      <span className={styles.lobby_tab__text}>{name}</span>
      <span className={styles.lobby_tab__text}>{type}</span>
      <span className={styles.lobby_tab__text}>{quantity}</span>
    </div>
  );
};
