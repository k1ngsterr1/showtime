import { useState } from "react";

export const useGameType = () => {
  const [gameType, setGameType] = useState("");

  const selectGameType = (type: string) => {
    setGameType("");
  };

  return { gameType, selectGameType };
};
