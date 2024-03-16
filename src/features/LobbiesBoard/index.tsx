import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { LobbyTab } from "@entities/LobbyTab";
import { YourGameTab } from "@features/YourGameTab";
import { players } from "@shared/lib/content/playersContent";
import { useGetRooms } from "@shared/lib/hooks/useGetRooms";

interface ILobbiesProps {
  lobbies: any[];
}

export const LobbiesBoard = () => {
  const rooms = useGetRooms();

  return (
    <section className={styles.lobbies}>
      <div className={styles.lobbies__upper_line}>
        <span className={styles.lobbies__upper_line__text}>Название игры</span>
        <span className={styles.lobbies__upper_line__text}>Тип</span>
        <span className={styles.lobbies__upper_line__text}>Кол-во игроков</span>
      </div>
      <div className={styles.lobbies__tabs}>
        <YourGameTab players={players} gameType="Классическая" />
        {rooms.map((room) => (
          <LobbyTab
            key={room.id}
            name={room.roomName}
            type={room.gameType}
            quantity={room.currentPlayers}
          />
        ))}
      </div>
    </section>
  );
};
