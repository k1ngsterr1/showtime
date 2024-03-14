import React from "react";
import { Link } from "react-scroll";

import styles from "./styles.module.scss";

interface LinkProps {
  text: string;
  to: string;
  href: string;
}

const LinkText: React.FC<LinkProps> = ({ text, to, href }) => {
  const handleClick = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  };

  return (
    <Link
      className={`${styles.link} hoverable`}
      to={to}
      href={href}
      smooth
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default LinkText;
