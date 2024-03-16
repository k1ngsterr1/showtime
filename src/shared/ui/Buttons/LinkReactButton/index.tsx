import React from "react";
import styles from "./styles.module.scss";

type ButtonType = "filled" | "outline" | "transparent";

interface Props {
  buttonType: ButtonType;
  href: string;
  text: string;
  margin?: string;
}

const DefaultButton: React.FC<Props> = ({ buttonType, text, href, margin }) => {
  const buttonClass = `${styles.button} ${styles[buttonType]} ${margin ? margin : ""}`;

  return (
    <a href={href} className={buttonClass}>
      {text}
    </a>
  );
};

export default DefaultButton;
