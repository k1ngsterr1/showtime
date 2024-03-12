import React from "react";
import Revolver from "@shared/ui/Icons/Revolver/index";
import styles from "./styles.module.scss";

interface Props {
  buttonType: "gallery";
  margin?: string;
  direction: string;
  onClick: () => void;
}

export const RevolverButton: React.FC<Props> = ({
  buttonType,
  margin,
  direction,
  onClick,
}) => {
  const buttonClass = `${styles.button} ${styles[direction]} ${styles[buttonType]} ${margin ? margin : ""}`;

  return (
    <button onClick={onClick} className={buttonClass}>
      <Revolver />
    </button>
  );
};
