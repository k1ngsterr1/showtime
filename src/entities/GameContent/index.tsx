import React from "react";

interface IGameContentProps {
  gameType: string;
}

export const GameContent: React.FC<IGameContentProps> = ({ gameType }) => {
  const renderContent = () => {
    switch (gameType) {
      case "urban":
        return <div>Content for Городская мафия</div>;
      case "bunker":
        return <div>Content for Бункер</div>;
      case "classic":
        return <div>Content for Классическая мафия</div>;
      default:
        return <div>Select a game type to see the rules and setup.</div>;
    }
  };

  return <>{renderContent()}</>;
};
