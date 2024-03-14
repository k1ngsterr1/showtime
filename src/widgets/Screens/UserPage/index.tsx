import bgImage from "@assets/Main/mafia_shadow.webp";
import revolver from "@assets/logo/revolver.svg";
import { MenuButton } from "@shared/ui/Icons/MenuButton";
import { UserProfile } from "@entities/UserProfile";
import { UserStats } from "@entities/UserStats";
import { HorizontalSeparator } from "@shared/ui/HorizontalSeparator";
import { NearGameCard } from "@entities/NearGameCard";

import styles from "./styles.module.scss";

export const UserScreen = () => {
  return (
    <main className={styles.user_screen}>
      <div className={styles.user_screen__container}>
        <div className={styles.user_screen__container__upper}>
          <div className="flex items-center gap-16">
            <img
              src={revolver.src}
              className={`${styles.user_screen__container__upper__icon} scale-x-[-1]`}
              alt="revolver"
            />
            <h2 className={styles.user_screen__container__upper__heading}>
              Личный кабинет
            </h2>
          </div>
          <MenuButton />
        </div>
        <UserProfile name="Руслан Махматов" rank="мафиози" />
        <HorizontalSeparator />
        <UserStats />
      </div>
      <div className={styles.user_screen__column_container}>
        <NearGameCard
          time="11"
          place="11"
          date="11"
          mapHref="11"
          address="11"
        />
      </div>
      <img
        src={bgImage.src}
        className={styles.user_screen__bg}
        alt="mafia_bg_image"
      />
    </main>
  );
};
