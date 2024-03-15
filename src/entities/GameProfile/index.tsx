import React from "react";

import styles from "./styles.module.scss";

interface IGameProfileProps {
  username: string;
  avatar: string;
  currentRank: string;
  totalGames: number;
  totalWins: number;
}

export const GameProfile: React.FC<IGameProfileProps> = ({
  username,
  avatar,
  currentRank,
  totalGames,
  totalWins,
}) => {
  return (
    <div className={styles.game_profile}>
      <div className="flex items-center-gap-2">
        <img
          src={avatar}
          alt={username}
          className={styles.game_profile__avatar}
        />
        <div className="flex flex-col items-start">
          <span className={styles.game_profile__name}>{username}</span>
          <span className={styles.game_profile__rank}>{currentRank}</span>
        </div>
      </div>
    </div>
  );
};
