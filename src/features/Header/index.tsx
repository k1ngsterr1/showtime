import Link from "react-scroll";
import Logo from "@shared/ui/Icons/Logo";
import { MenuButton } from "@shared/ui/Icons/MenuButton";

import styles from "./styles.module.scss";
import LinkText from "@shared/ui/LinkText";
import { LanguageButton } from "@shared/ui/LanguageButton";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <nav className={styles.header__content__links}>
          <LinkText text="Главная" to="main" href="" />
          <LinkText text="О нас" to="about" href="" />
          <LinkText text="Услуги" to="services" href="" />
          <LinkText text="Расписание" to="timetable" href="" />
          <LinkText text="Правила" to="rules" href="" />
          <LinkText text="Рейтинг" to="rating" href="" />
          <LinkText text="Контакты" to="contacts" href="" />
        </nav>
        <div className="flex items-center justify-center gap-8 overflow-hidden">
          <LanguageButton />
          <MenuButton />
        </div>
      </div>
    </header>
  );
};
