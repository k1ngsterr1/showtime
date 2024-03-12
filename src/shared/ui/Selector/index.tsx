import React, { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "../Dropdown";
import useSelector from "@shared/lib/hooks/useSelector";
import { Input } from "../Inputs/DefaultInput";

import styles from "./styles.module.scss";

interface SelectorProps<T> {
  items: T[];
  className?: string;
  selectedValue: T;
  initialValue?: T;
  placeholder: string;
  onChange: (value: T) => void;
}

export const Selector = <T extends string | number>({
  items,
  onChange,
  selectedValue,
  className,
  placeholder,
  initialValue,
}: SelectorProps<T>): JSX.Element => {
  const { selectedItem, setSelectedItem } = useSelector<T>(initialValue!);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (selectedOption: any) => {
    setSelectedItem(selectedOption);
    onChange(selectedOption);
    setIsOpen(false);
    console.log(selectedItem);
  };

  return (
    <div className={`${styles.selector} ${className || ""}`.trim()}>
      <div onClick={toggleDropdown} className={styles.inputWrapper}>
        <Input
          type="text"
          placeholder={placeholder}
          value={selectedValue}
          inputType="default-red"
        />
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={styles.icon}
        />
      </div>
      {isOpen && (
        <Dropdown
          items={items}
          className={styles.selector__dropdown}
          setOption={handleOptionClick}
        />
      )}
    </div>
  );
};
