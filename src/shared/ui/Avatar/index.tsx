import hat from "@assets/logo/fedora.svg";

import styles from "./styles.module.scss";

export const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img src={hat.src} className={styles.avatar__icon} />
    </div>
  );
};
