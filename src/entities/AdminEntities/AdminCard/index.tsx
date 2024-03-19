import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

interface Props {
  icon: any;
  tab: string;
  href: string;
}
export const AdminCard: React.FC<Props> = ({ icon, tab, href }) => {
  return (
    <button className={styles.panel}>
      <a href={href} className={styles.panel__link}>
        <FontAwesomeIcon icon={icon} className={styles.panel__icon} />
        <span className={styles.panel__url}>{tab}</span>
      </a>
    </button>
  );
};
