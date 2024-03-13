import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

export const SearchBar = () => {
  return (
    <div className={styles.search_bar}>
      <FontAwesomeIcon icon={faSearch} className={styles.search_bar__icon} />
      <input
        type="text"
        placeholder="Поиск"
        className={styles.search_bar__input}
      />
    </div>
  );
};
