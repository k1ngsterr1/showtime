import Link from "react-scroll";
import Logo from "@shared/ui/Icons/Logo";
import { MenuButton } from "@shared/ui/Icons/MenuButton";
import { LanguageButton } from "@shared/ui/LanguageButton";

import styles from "./styles.module.scss";
import LinkText from "@shared/ui/LinkText";
import { useCustomMenu } from "@shared/lib/hooks/useCustomMenu";

export const Header = () => {
  const { onOpen } = useCustomMenu();
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
          <span className="overflow-hidden" onClick={onOpen}>
            <MenuButton />
          </span>
        </div>
      </div>
    </header>
  );
};
