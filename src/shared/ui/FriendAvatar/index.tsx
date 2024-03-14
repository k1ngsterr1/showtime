import React from "react";

import styles from "./styles.module.scss";

export interface IFriendAvatarProps {
  photo: ImageMetadata;
}

export const FriendAvatar: React.FC<IFriendAvatarProps> = ({ photo }) => {
  return (
    <span className={styles.friend_avatar}>
      <img
        src={photo.src}
        alt="friend_avatar"
        className={styles.friend_avatar__image}
      />
    </span>
  );
};
