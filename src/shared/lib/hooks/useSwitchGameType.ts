import { useState } from "react";

export const useGameType = () => {
  const [gameType, setGameType] = useState("");

  const selectGameType = (type: string) => {
    setGameType(type);
    console.log(gameType);
  };

  return { gameType, selectGameType };
};
