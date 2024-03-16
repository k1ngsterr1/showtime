import React, { useEffect, useState, type FormEvent } from "react";
import { PlayersCounter } from "@entities/PlayersCounter";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import { createRoom } from "@shared/lib/hooks/useCreateGame";
import styles from "./styles.module.scss";
import { useUserData } from "@shared/lib/hooks/useGetUserData";

interface IGameContentProps {
  gameType: "urban" | "bunker" | "classic";
}

export const GameContent: React.FC<IGameContentProps> = ({ gameType }) => {
  const userData = useUserData();

  useEffect(() => {
    if (userData) {
      setRoomData((prevState) => ({
        ...prevState,
        gameType: gameType,
        creatorId: userData.id,
      }));
    }
  }, [gameType, userData]);

  const [roomData, setRoomData] = useState({
    gameType: gameType,
    roomName: "",
    capacity: 8,
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setRoomData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createRoom(roomData);
    } catch (error) {
      console.error("Room creation failed:", error);
    }
  };

  const renderContent = () => {
    switch (gameType) {
      case "urban":
        return (
          <form className={styles.urban_content} onSubmit={handleSubmit}>
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
              required
              name="roomName"
              margin="mt-4"
              value={roomData.roomName}
              onChange={handleInputChange}
            />
            <div className="w-[90%] flex items-center justify-between mt-4">
              <span className={styles.urban_content__players}>Игроки</span>
              <PlayersCounter />
            </div>
            <ReactButton
              text="Создать комнату"
              buttonType="filled"
              type="submit"
              margin=" mt-4 w-[92%]"
            />
          </form>
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
