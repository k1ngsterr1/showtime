import { MenuButton } from "@shared/ui/Icons/MenuButton";
import { UserTab } from "@entities/UserTab";
import { Line } from "@shared/ui/Line";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "@shared/ui/Icons/Logo";
import styles from "./styles.module.scss";

export const Menu = () => {
  return (
    <aside className={styles.menu}>
      <div className={styles.menu__container}>
        <Line position="left-56 top-0" />
        <Line position="right-56 top-0" />
        <div className="w-full flex justify-between items-center mt-8 overflow-hidden">
          <Logo />
          <MenuButton />
        </div>
        <div className={styles.menu__container__inner}>
          <div className="flex flex-col items-start">
            <a href="" className={styles.menu__container__inner__link}>
              Главная
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              О компании
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              Продукция
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              Услуги
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              Правила работы
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              Партнеры
            </a>
            <div className="flex items-center gap-8 mt-8">
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.menu__container__inner__icon}
              />
              <FontAwesomeIcon
                icon={faTiktok}
                className={styles.menu__container__inner__icon}
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <a href="" className={styles.menu__container__inner__link}>
              Вакансии
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              Гарантии
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              Лицензии
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              Наши клиенты
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              История
            </a>
            <a href="" className={styles.menu__container__inner__link}>
              Сотрудники
            </a>
          </div>
          <UserTab name="Руслан Махматов" />
        </div>
      </div>
    </aside>
  );
};
