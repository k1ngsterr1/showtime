import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminCard } from "@entities/AdminCard/index";

import Logo from "@shared/ui/Icons/Logo";

import styles from "./styles.module.scss";

import {
  faUser,
  faCartShopping,
  faFileLines,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export const adminpanel = [
  {
    icon: faUser,
    tab: "Команда",
    href: "team",
  },
  {
    icon: faCartShopping,
    tab: "Услуги",
    href: "services",
  },
  {
    icon: faFileLines,
    tab: "Заказы",
    href: "orders",
  },
  {
    icon: faSignOutAlt,
    tab: "Выйти",
    href: "logout",
  },
];

interface IPanel {
  adminpanel: Array<{
    icon: any;
    tab: string;
    href: string;
  }>;
}

export const AdminPanel: React.FC<IPanel> = ({ adminpanel }) => {
  return (
    <main className={styles.panel}>
      <div className={styles.panel__content}>
        <Logo />
        <div className={styles.panel__content_card}>
          {adminpanel.map((item, index) => (
            <AdminCard
              key={index}
              icon={item.icon}
              tab={item.tab}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
