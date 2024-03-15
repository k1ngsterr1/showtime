import React, { useState } from "react";
import { PlayersCounter } from "@entities/PlayersCounter";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";

import styles from "./styles.module.scss";
import { Input } from "@shared/ui/Inputs/DefaultInput";

interface IGameContentProps {
  gameType: string;
}

export const GameContent: React.FC<IGameContentProps> = ({ gameType }) => {
  const renderContent = () => {
    switch (gameType) {
      case "urban":
        return (
          <div className={styles.urban_content}>
            <h3 className={styles.urban_content__heading}>
              Режим: "Городская мафия"
            </h3>
            <p className={styles.urban_content__paragraph}>
              В этом режиме вы играете на свой ранг со случайными соперниками.
              При победе ваш ранг повысится, при поражении — понизится.
            </p>
            <Input
              placeholder="Название комнаты"
              inputType="default-red"
              type="text"
              name="room_name"
              margin="mt-4"
            />
            <div className="w-[90%] flex items-center justify-between mt-4">
              <span className={styles.urban_content__players}>Игроки</span>
              <PlayersCounter />
            </div>
            <ReactButton
              text="Создать комнату"
              buttonType="filled"
              margin=" mt-4 w-[92%]"
            />
          </div>
        );
      case "bunker":
        return (
          <div className={styles.urban_content}>
            <h3 className={styles.urban_content__heading}>Режим: "Бункер"</h3>
            <p className={styles.urban_content__paragraph}>
              В этом режиме вы играете на свой ранг со случайными соперниками.
              При победе ваш ранг повысится, при поражении — понизится.
            </p>
            <Input
              placeholder="Название комнаты"
              inputType="default-red"
              type="text"
              name="room_name"
              margin="mt-4"
            />
            <div className="w-[90%] flex items-center justify-between mt-4">
              <span className={styles.urban_content__players}>Игроки</span>
              <PlayersCounter />
            </div>
            <ReactButton
              text="Создать комнату"
              buttonType="filled"
              margin=" mt-4 w-[92%]"
            />
          </div>
        );
      case "classic":
        return (
          <div className={styles.urban_content}>
            <h3 className={styles.urban_content__heading}>
              Режим: "Классическая мафия"
            </h3>
            <p className={styles.urban_content__paragraph}>
              В этом режиме вы играете на свой ранг со случайными соперниками.
              При победе ваш ранг повысится, при поражении — понизится.
            </p>
            <Input
              placeholder="Название комнаты"
              inputType="default-red"
              type="text"
              name="room_name"
              margin="mt-4"
            />
            <div className="w-[90%] flex items-center justify-between mt-4">
              <span className={styles.urban_content__players}>Игроки</span>
              <PlayersCounter />
            </div>
            <ReactButton
              text="Создать комнату"
              buttonType="filled"
              margin=" mt-4 w-[92%]"
            />
          </div>
        );
      default:
        return (
          <div className={styles.urban_content}>
            <h3 className={styles.urban_content__heading}>
              Режим: "Городская мафия"
            </h3>
            <p className={styles.urban_content__paragraph}>
              В этом режиме вы играете на свой ранг со случайными соперниками.
              При победе ваш ранг повысится, при поражении — понизится.
            </p>
            <Input
              placeholder="Название комнаты"
              inputType="default-red"
              type="text"
              name="room_name"
              margin="mt-4"
            />
            <div className="w-[90%] flex items-center justify-between mt-4">
              <span className={styles.urban_content__players}>Игроки</span>
              <PlayersCounter />
            </div>
            <ReactButton
              text="Создать комнату"
              buttonType="filled"
              margin=" mt-4 w-[92%]"
            />
          </div>
        );
    }
  };

  return <>{renderContent()}</>;
};
