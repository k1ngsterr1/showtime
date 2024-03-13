import React from "react";

import styles from "./styles.module.scss";

interface SelectedBarProps {
  text: string;
}

export const SelectedBar: React.FC<SelectedBarProps> = ({ text }) => {
  return <div className={styles.selected_bar}>{text}</div>;
};
