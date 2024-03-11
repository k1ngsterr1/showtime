import React, { useState } from "react";
import { Icon } from "astro-icon/components";
import styles from "../styles/styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
  inputType: string | "default" | "password";
  placeholder: string;
  type: string;
}

export const PasswordInput: React.FC<InputProps> = ({
  margin,
  inputType,
  placeholder,
  type,
  ...rest
}) => {
  const [isShown, setShown] = useState(false);
  const inputClass = `${styles.input} ${styles[`input--${inputType}`]} ${margin ? margin : ""}`;

  const handleClick = () => {
    setShown(!isShown);
    console.log("zhopa");
  };

  return (
    <div className="relative" onClick={handleClick}>
      <input
        className={inputClass}
        placeholder={placeholder}
        type={type}
        {...rest}
        required
      />
      <FontAwesomeIcon
        onClick={handleClick}
        icon={isShown ? faEye : faEyeSlash}
        className={styles.icon}
      />
    </div>
  );
};
