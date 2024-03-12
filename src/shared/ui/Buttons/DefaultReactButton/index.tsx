import React from "react";

import styles from "../DefaultButton/styles.module.scss";

interface ButtonProps {
  buttonType: "filled" | "outline" | "transparent";
  text: string;
  margin?: string;
  type?: string;
  onClick?: () => void;
}

export const ReactButton: React.FC<ButtonProps> = ({
  buttonType,
  text,
  margin,
  onClick,
}) => {
  const buttonClass = `${styles.button} ${styles[buttonType]} ${margin ? margin : ""}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};
