import bgImage from "@assets/Main/mafia_shadow.webp";
import revolver from "@assets/logo/revolver.svg";
import { MenuButton } from "@shared/ui/Icons/MenuButton";
import { UserProfile } from "@entities/UserProfile";
import { UserStats } from "@entities/UserStats";
import { HorizontalSeparator } from "@shared/ui/HorizontalSeparator";
import { MoneyTab } from "@entities/MoneyTab";
import { useCustomMenu } from "@shared/lib/hooks/useCustomMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { UserAside } from "@features/UserAside";
import { useCustomShop } from "@shared/lib/hooks/useCustomShop";
import { useUserData } from "@shared/lib/hooks/useGetUserData";

import styles from "./styles.module.scss";

export const UserScreen = () => {
  const { onOpen } = useCustomMenu();
  const userData = useUserData();
  const { onShopOpen } = useCustomShop();

  const handleGoBack = () => {
    window.location.href = "/";
  };

  const handleGoEdit = () => {
    window.location.href = "/user-edit";
  };

  return (
    <>
      <main className={styles.user_screen}>
        <div className="w-full flex flex-col">
          <div className={styles.user_screen__upper}>
            <div className="flex items-center gap-16">
              <img
                onClick={handleGoBack}
                src={revolver.src}
                className={`${styles.user_screen__upper__icon} scale-x-[-1]`}
                alt="revolver"
              />
              <h2 className={styles.user_screen__upper__heading}>
                Личный кабинет
              </h2>
            </div>
            <div className="flex items-center gap-8 overflow-hidden">
              <FontAwesomeIcon
                icon={faCartPlus}
                onClick={onShopOpen}
                className={styles.user_screen__upper__cart_icon}
              />
              <div onClick={onOpen} className="overflow-hidden">
                <MenuButton />
              </div>
              <FontAwesomeIcon
                icon={faEdit}
                onClick={handleGoEdit}
                className={styles.user_screen__upper__cart_icon}
              />
            </div>
          </div>
        </div>
        <section className={styles.user_screen__container}>
          <div className="flex flex-col w-[35%] sticky top-0 z-10 ">
            <UserProfile name={userData?.username} rank={userData?.rank} />
            <MoneyTab money={userData?.balance} />
            <HorizontalSeparator />
            <UserStats />
          </div>
          <UserAside />
        </section>
        <img
          src={bgImage.src}
          className={styles.user_screen__bg}
          alt="mafia_bg_image"
        />
      </main>
      <main className={styles.user_mob_screen}>
        <div className="w-[90%] mt-8 m-auto">
          <div className="w-full flex flex-col">
            <div className={styles.user_mob_screen__upper}>
              <div className="flex justify-between m-auto items-center ">
                <img
                  onClick={handleGoBack}
                  src={revolver.src}
                  className={`${styles.user_mob_screen__upper__icon} scale-x-[-1]`}
                  alt="revolver"
                />
                <div className="flex items-center gap-8 overflow-hidden">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    onClick={onShopOpen}
                    className={styles.user_mob_screen__upper__cart_icon}
                  />
                  <div onClick={onOpen} className="overflow-hidden">
                    <MenuButton />
                  </div>
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={handleGoEdit}
                    className={styles.user_mob_screen__upper__cart_icon}
                  />
                </div>
              </div>
              <h2 className={styles.user_mob_screen__upper__heading}>
                Личный кабинет
              </h2>
            </div>
          </div>
          <section className={styles.user_mob_screen__container}>
            <div className="flex flex-col sticky top-0 ">
              <UserProfile name={userData?.username} rank={userData?.rank} />
              <MoneyTab money={userData?.balance} />
              {/* <UserStats /> */}
            </div>
            <div className="mt-8">
              <UserAside />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
