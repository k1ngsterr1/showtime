import React from "react";

import styles from "./style.module.scss";

interface UserTab {
  name: string;
  position: string;
  margin?: string;
  photo: ImageMetadata;
}

const AdminUserTab: React.FC<UserTab> = ({ name, margin, position, photo }) => {
  const buttonClass = `${styles.button} ${margin ? margin : ""}`;

  return (
    <div className={styles.usertab}>
      <div className={styles.usertab__photo}>
        <img src={photo.src} alt="photo" />
      </div>
      <div className={styles.usertab__text}>
        <span className={styles.usertab__text_name}>{name}</span>
        <span className={styles.usertab__text_position}>{position}</span>
      </div>
    </div>
  );
};

export default AdminUserTab;
