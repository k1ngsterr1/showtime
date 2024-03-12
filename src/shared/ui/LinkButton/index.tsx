import React from "react";
import { Link } from "react-scroll";

import styles from "../Buttons/DefaultButton/styles.module.scss";

interface ButtonProps {
  buttonType: "filled" | "outline" | "transparent";
  text: string;
  margin?: string;
  to: string;
}

export const LinkButton: React.FC<ButtonProps> = ({
  buttonType,
  text,
  margin,
  to,
}) => {
  const buttonClass = `${styles.button} ${styles[buttonType]} ${margin ? margin : ""}`;

  return (
    <Link className={buttonClass} to={to}>
      {text}
    </Link>
  );
};
