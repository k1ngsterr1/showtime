import React from "react";

import styles from "./styles.module.scss";

interface IGameProfileProps {
  username: string;
  avatar: string;
  currentRank: string;
  totalGames: number;
  totalWins: number;
  totalLoses: number;
}

export const GameProfile: React.FC<IGameProfileProps> = ({
  username,
  avatar,
  currentRank,
  totalGames,
  totalWins,
  totalLoses,
}) => {
  return (
    <div className={styles.game_profile}>
      <div className="flex items-center gap-8">
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
      <div className={styles.game_profile__stats}>
        <div className={styles.game_profile__stats__game}>
          Кол-во игр:
          <span className={styles.game_profile__stats__game__number}>
            {totalGames}
          </span>
        </div>
        <div className={styles.game_profile__stats__game}>
          Победа:
          <span className={styles.game_profile__stats__game__number}>
            {totalWins}
          </span>
        </div>
        <div className={styles.game_profile__stats__game}>
          Поражений:
          <span className={styles.game_profile__stats__game__number}>
            {totalLoses}
          </span>
        </div>
      </div>
    </div>
  );
};
