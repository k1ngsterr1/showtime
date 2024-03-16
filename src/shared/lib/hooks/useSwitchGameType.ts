import { useState } from "react";

export const useGameType = () => {
  const [gameType, setGameType] = useState<any>("");

  const selectGameType = (type: any) => {
    setGameType(type);
    console.log(gameType);
  };

  return { gameType, selectGameType };
};
