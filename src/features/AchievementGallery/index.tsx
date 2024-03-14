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
  const swiperRef = React.useRef<Swiper | null>(null);

  return (
    <>
      <Swiper slidesPerView={9} spaceBetween={16}>
        <SwiperSlide>
          {achievements.map((achievement, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <Achievement image={achievement.image} />
            </SwiperSlide>
          ))}
        </SwiperSlide>
      </Swiper>
    </>
  );
};
