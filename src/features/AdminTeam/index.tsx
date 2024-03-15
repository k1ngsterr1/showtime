import React from "react";
import AdminUserTab from "../../shared/ui/AdminUserTab/index";

import styles from "./styles.module.scss";

import Oleg from "../../assets/Admin/oleg.webp";

export const users = [
  {
    name: "Ergali Gaidarov",
    position: "Povar",
    photo: Oleg,
  },
  {
    name: "Ergali Gaidarov",
    position: "Povar",
    photo: Oleg,
  },
  {
    name: "Ergali Gaidarov",
    position: "Povar",
    photo: Oleg,
  },
  {
    name: "Ergali Gaidarov",
    position: "Povar",
    photo: Oleg,
  },
  {
    name: "Ergali Gaidarov",
    position: "Povar",
    photo: Oleg,
  },
];

interface IUsers {
  users: Array<{
    photo: ImageMetadata;
    name: string;
    position: string;
  }>;
}

const TeamCard: React.FC<IUsers> = ({ users }) => {
  return (
    <div className={styles.adminCard}>
      {users.map((user, index) => (
        <AdminUserTab
          key={index}
          name={user.name}
          position={user.position}
          photo={user.photo}
        />
      ))}
    </div>
  );
};

export default TeamCard;
