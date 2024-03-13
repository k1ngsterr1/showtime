import styles from "./styles.module.scss";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
  inputType: string | "default" | "default-red";
  placeholder?: string;
  type: string;
}

export const Input: React.FC<InputProps> = ({
  margin,
  inputType,
  placeholder,
  type,
}) => {
  const inputClass = `${styles.input} ${styles[`input--${inputType}`]} ${margin ? margin : ""}`;

  return (
    <input
      className={inputClass}
      type={type}
      placeholder={placeholder}
      required
    />
  );
};
