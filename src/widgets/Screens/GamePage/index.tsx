import React, { useEffect } from "react";
import photo from "@assets/logo/fedora.svg";
import { HelpCard } from "@entities/HelpCard";
import { GameProfile } from "@entities/GameProfile";
import { Lobby } from "@features/Lobby";
import { useGetScore } from "@shared/lib/hooks/useGetScore";
import { useUserData } from "@shared/lib/hooks/useGetUserData";
import { ErrorScreen } from "../Error";

import styles from "./styles.module.scss";

export const GameScreen = () => {
  const userData = useUserData();
  const { scoreData } = useGetScore();

  useEffect(() => {
    console.log(scoreData);
    console.log("userData:", userData);
  });

  return (
    <>
      {userData === null ? (
        <ErrorScreen />
      ) : (
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
                totalGames={scoreData!.totalGames}
                totalLoses={scoreData!.totalLoses}
                totalWins={scoreData!.totalWins}
                username={userData!.username}
                currentRank={scoreData!.currentRank}
                avatar={photo.src}
              />
              <Lobby />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
