import React from "react";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const LanguageButton = () => {
  return (
    <div className={styles.language_button}>
      RU
      <FontAwesomeIcon
        icon={faChevronDown}
        className={styles.language_button__chevron}
      />
    </div>
  );
};
