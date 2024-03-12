import { useState } from "react";

import styles from "../PasswordInput/styles.module.scss";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: string;
}

const PasswordInputProp: React.FC<PasswordInputProps> = ({
  margin,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.input_container}>
        <input
          className={`${styles.password_input} ${margin}`}
          required
          {...rest}
          type={visible ? "text" : "password"}
        />
        <div
          onClick={() => setVisible(!visible)}
          className={styles.show_password}
        >
          {visible ? (
            <FontAwesomeIcon icon={faEye} className={`${styles.icon} mb-1`} />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className={`${styles.icon} mb-1`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordInputProp;
