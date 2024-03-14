import bgImage from "@assets/Main/mafia_shadow.webp";
import revolver from "@assets/logo/revolver.svg";
import { MenuButton } from "@shared/ui/Icons/MenuButton";
import { UserProfile } from "@entities/UserProfile";
import { UserStats } from "@entities/UserStats";
import { HorizontalSeparator } from "@shared/ui/HorizontalSeparator";
import { NearestGameSwiper } from "@features/NearestGames";
import { nearGameCards } from "@shared/lib/content/gamesContent";
import { AchievementGallery } from "@features/AchievementGallery";
import { achievements } from "@shared/lib/content/achievementContent";

import styles from "./styles.module.scss";

export const UserScreen = () => {
  return (
    <main className={styles.user_screen}>
      <div className="w-full flex flex-col">
        <div className={styles.user_screen__upper}>
          <div className="flex items-center gap-16">
            <img
              src={revolver.src}
              className={`${styles.user_screen__upper__icon} scale-x-[-1]`}
              alt="revolver"
            />
            <h2 className={styles.user_screen__upper__heading}>
              Личный кабинет
            </h2>
          </div>
          <MenuButton />
        </div>
      </div>
      <section className={styles.user_screen__container}>
        <div className="flex flex-col w-[35%]">
          <UserProfile name="Руслан Махматов" rank="мафиози" />
          <HorizontalSeparator />
          <UserStats />
        </div>
        <div className={styles.user_screen__column_container}>
          <div className={styles.user_screen__column_container__games}>
            <div className="w-full flex items-center justify-between">
              <span
                className={styles.user_screen__column_container__games__heading}
              >
                Ближайшие игры
              </span>
              <a
                className={styles.user_screen__column_container__games__link}
                href="/all"
              >
                Подробнее
              </a>
            </div>
            <NearestGameSwiper cards={nearGameCards} />
          </div>
          <div className={styles.user_screen__column_container__achievements}>
            <div className="w-full flex items-center justify-between">
              <span
                className={
                  styles.user_screen__column_container__achievements__heading
                }
              >
                Достижения
              </span>
              <a
                className={
                  styles.user_screen__column_container__achievements__link
                }
                href="/all"
              >
                Подробнее
              </a>
            </div>
            <AchievementGallery achievements={achievements} />
          </div>
        </div>
      </section>
      <img
        src={bgImage.src}
        className={styles.user_screen__bg}
        alt="mafia_bg_image"
      />
    </main>
  );
};
