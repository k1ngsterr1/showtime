import React, { useEffect } from "react";
import photo from "@assets/logo/fedora.svg";
import { HelpCard } from "@entities/HelpCard";
import { GameProfile } from "@entities/GameProfile";
import { Lobby } from "@features/Lobby";
import { useGetScore } from "@shared/lib/hooks/useGetScore";

import styles from "./styles.module.scss";

export const GameScreen = () => {
  const { scoreData } = useGetScore();

  useEffect(() => {
    console.log(scoreData);
  });

  return (
    <div className={styles.game}>
      <div className={styles.game__main_content}>
        <HelpCard
          text="Узнайте главные правила игры в мафию за 5 минут"
          paragraph="В разделе «правила», который мы составили для новых игроков"
          linkText="Узнать"
          href="/"
        />
        <div className="flex items-center justify-center mt-8 gap-16 ">
          <GameProfile
            totalGames={1}
            totalLoses={1}
            totalWins={1}
            username="Ruslan Makhmatov"
            currentRank="Новичок"
            avatar={photo.src}
          />
          <Lobby />
        </div>
      </div>
    </div>
  );
};
