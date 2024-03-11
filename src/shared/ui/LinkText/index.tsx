import React from "react";
import { Link } from "react-scroll";

import styles from "./styles.module.scss";

interface LinkProps {
  text: string;
  to: string;
}

const LinkText: React.FC<LinkProps> = ({ text, to }) => {
  return (
    <Link className={styles.link} to={to}>
      {text}
    </Link>
  );
};

export default LinkText;
