import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

interface Props {
  icon: any;
  tab: string;
}
export const AdminCard: React.FC<Props> = ({ icon, tab }) => {
  return (
    <div className={styles.panel}>
      <FontAwesomeIcon icon={icon} />
      <span>{tab}</span>
    </div>
  );
};
