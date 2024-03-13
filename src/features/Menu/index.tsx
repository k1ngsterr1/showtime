import { useRef } from "react";
import { MenuButton } from "@shared/ui/Icons/MenuButton";
import { UserTab } from "@entities/UserTab";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBar } from "@features/SearchBar";
import { Line } from "@shared/ui/Line";
import { links, links_second } from "@shared/lib/content/menuLinks";
import { useCustomMenu } from "@shared/lib/hooks/useCustomMenu";

import Logo from "@shared/ui/Icons/Logo";
import styles from "./styles.module.scss";

export const Menu = () => {
  const { onClose } = useCustomMenu();
  return (
    <aside className={styles.menu} id="menu">
      <div className={styles.menu__container}>
        <div className="absolute top-8 left-0 overflow-hidden">
          <Logo />
        </div>
        <div
          className="absolute top-8 right-0 overflow-hidden"
          onClick={onClose}
        >
          <MenuButton />
        </div>
        <div className={styles.menu__container__inner}>
          <div className="flex flex-col items-start overflow-hidden">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`${styles.menu__container__inner__link} ${index > 0 ? "mt-2" : ""}`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-8 mt-8 ">
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.menu__container__inner__icon}
              />
              <FontAwesomeIcon
                icon={faTiktok}
                className={styles.menu__container__inner__icon}
              />
            </div>
            <div className="flex flex-col items-start overflow-hidden">
              <a
                href="tel:+77017812956"
                className={`${styles.menu__container__inner__contact} mt-8`}
              >
                +7 701 781 29 56
              </a>
              <span
                className={`${styles.menu__container__inner__contact} mt-4`}
              >
                ул.Маметова 54, 4 этаж
              </span>
              <span
                className={`${styles.menu__container__inner__contact} mt-4`}
              >
                Время работы: с 08:00 до 17:00 <br /> Выходные: суббота,
                воскресенье
              </span>
            </div>
          </div>
          <Line />
          <div className="flex flex-col items-start overflow-hidden">
            {links_second.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`${styles.menu__container__inner__link} ${index > 0 ? "mt-2" : ""}`}
              >
                {link.name}
              </a>
            ))}
            <UserTab name="Руслан Махматов" margin="mt-8" />
            <SearchBar />
          </div>
        </div>
      </div>
    </aside>
  );
};
