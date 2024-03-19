import React from "react";
import { FriendItem } from "@shared/ui/FriendItem";
import styles from "./styles.module.scss";

interface Friend {
  id: string;
  name: string;
  photoUrl: string;
}

interface SearchPopupProps {
  isOpen: boolean;
  friends: Friend[];
  onAddFriend: (friendId: string) => void;
}

export const SearchPopup: React.FC<SearchPopupProps> = ({
  isOpen,
  friends,
  onAddFriend,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.searchPopup}>
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} onAddFriend={onAddFriend} />
      ))}
    </div>
  );
};
