import React from "react";
import { Avatar } from "@shared/ui/Avatar";
import styles from "./styles.module.scss";

interface IUserTab {
  name: string;
}

export const UserTab: React.FC<IUserTab> = ({ name }) => {
  return (
    <div className={styles.user_tab}>
      <Avatar />
      <span className={styles.user_tab__name}>{name}</span>
    </div>
  );
};
