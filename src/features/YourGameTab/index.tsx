import React from "react";

import styles from "./styles.module.scss";
import { PlayerAvatar } from "@entities/PlayerAvatar";

export interface PlayerItem {
  photo: ImageMetadata;
  name: string;
}

interface YourGameTabProps {
  players: PlayerItem[];
  gameType: string;
  gameName: string;
  capacity: number;
}

export const YourGameTab: React.FC<YourGameTabProps> = ({
  players,
  gameType,
  gameName,
  capacity,
}) => {
  return (
    <div className={styles.game_tab}>
      <span className={styles.game_tab__text}>{gameName}</span>
      <span className={styles.game_tab__type}>{gameType}</span>
      <span className={styles.game_tab__text}>{capacity}</span>
      <hr className={styles.game_tab__separator} />
      <div className="flex items-center gap-8 mt-4">
        {players.map((player, index) => (
          <PlayerAvatar name={player.name} photo={player.photo} />
        ))}
      </div>
    </div>
  );
};
