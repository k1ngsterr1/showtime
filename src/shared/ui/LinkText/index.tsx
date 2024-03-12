import React from "react";
import { Link } from "react-scroll";

import styles from "./styles.module.scss";

interface LinkProps {
  text: string;
  to: string;
  href: string;
}

const LinkText: React.FC<LinkProps> = ({ text, to, href }) => {
  return (
    <Link className={`${styles.link} hoverable`} to={to} href={href}>
      {text}
    </Link>
  );
};

export default LinkText;
