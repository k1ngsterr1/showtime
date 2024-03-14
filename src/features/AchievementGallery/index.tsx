import React from "react";
import { Achievement, type IAchievementsProps } from "@shared/ui/Achievements";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./styles.module.scss";

type Swiper = any;

interface IAchivementsGalleryProps {
  achievements: IAchievementsProps[];
}

export const AchievementGallery: React.FC<IAchivementsGalleryProps> = ({
  achievements,
}) => {
  return (
    <>
      <Swiper
        slidesPerView={9}
        width={100}
        spaceBetween={48}
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className="flex gap-4 overflow-hidden">
            {achievements.map((achievement, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <Achievement image={achievement.image} />
              </SwiperSlide>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
