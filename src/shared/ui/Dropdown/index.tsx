import React, { useState } from "react";

import styles from "./styles.module.scss";

interface DropdownProps {
  items: any[];
  className: string;
  setOption: (selectedOption: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ items, setOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      {items.map((item, index) => (
        <div
          className={styles.dropdown__items}
          key={index}
          onClick={() => setOption(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
