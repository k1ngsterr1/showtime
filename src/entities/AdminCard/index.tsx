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
    <div className={styles.panel}>
      <FontAwesomeIcon icon={icon} className={styles.panel__icon} />
      <a href={href} className={styles.panel__link}>
        {tab}
      </a>
    </div>
  );
};
