import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LinkText from "../../shared/ui/LinkText/index";

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
  },
  {
    icon: faCartShopping,
    tab: "Услуги",
  },
  {
    icon: faFileLines,
    tab: "Заказы",
  },
  {
    icon: faSignOutAlt,
    tab: "Выйти",
  },
];

interface IPanel {
  adminpanel: Array<{
    icon: any;
    tab: string;
  }>;
}

export const AdminPanel: React.FC<IPanel> = ({ adminpanel }) => {
  return (
    <main className={styles.panel}>
      <div className={styles.panel__content}>
        <Logo />
        <div className={styles.panel__content_tabs}></div>
      </div>
    </main>
  );
};
