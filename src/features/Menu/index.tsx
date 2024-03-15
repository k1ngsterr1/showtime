import { MenuButton } from "@shared/ui/Icons/MenuButton";
import { UserTab } from "@entities/UserTab";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBar } from "@features/SearchBar";
import { Line } from "@shared/ui/Line";
import { links, links_second } from "@shared/lib/content/menuLinks";
import { useCustomMenu } from "@shared/lib/hooks/useCustomMenu";

import LogoMob from "@assets/logo/menu_revolver.svg";
import ShowMob from "@assets/logo/showtime_logo.svg";
import Logo from "@shared/ui/Icons/Logo";
import styles from "./styles.module.scss";

export const Menu = () => {
  const { onClose } = useCustomMenu();
  return (
    <>
      <aside className={styles.menu} id="menu">
        <Line position="absolute left-0 right-0 ml-auto mr-auto" />
        <div className={styles.menu__container}>
          <div className="absolute top-16 left-0 overflow-hidden">
            <Logo />
          </div>
          <div
            className="absolute top-16 right-0 overflow-hidden"
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
            <div className="w-[45%] flex flex-col items-start  overflow-hidden">
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
      <aside className={styles.menu_mob} id="menu">
        <div className={styles.menu_mob__container}>
          <div
            className={`${"absolute top-12 left-5 overflow-hidden"} ${styles.show}`}
          >
            <img src={ShowMob.src} alt="" />
          </div>
          <div
            className={`${"absolute top-12 right-5 overflow-hidden"} ${styles.logo}`}
            onClick={onClose}
          >
            <img src={LogoMob.src} alt="" />
          </div>
          <div className={styles.menu_mob__container__inner}>
            <div className={styles.menu_mob__container__inner__items}>
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className={`${styles.menu_mob__container__inner__link} ${index > 0 ? "mt-2" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col items-end mt-16 ">
              {links_second.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className={`${styles.menu_mob__container__inner__link} ${index > 0 ? "mt-2" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <UserTab name="Руслан Махматов" margin="mt-14" />
            <SearchBar />

            <div className="flex items-center gap-8 mt-8 mb-4">
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.menu_mob__container__inner__icon}
              />
              <FontAwesomeIcon
                icon={faTiktok}
                className={styles.menu_mob__container__inner__icon}
              />
            </div>
            <a
              href="tel:+77017812956"
              className={`${styles.menu_mob__container__inner__contact} mt-0`}
            >
              +7 701 781 29 56
            </a>
            <span
              className={`${styles.menu_mob__container__inner__contact} mt-4`}
            >
              ул.Маметова 54, 4 этаж
            </span>
            <span
              className={`${styles.menu_mob__container__inner__contact} mt-4`}
            >
              Время работы: с 08:00 до 17:00 <br /> Выходные: суббота,
              воскресенье
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};
