import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCustomSwiper } from "@shared/lib/hooks/useCustomSwipes";
import { NearGameCard, type INearGameCard } from "@entities/NearGameCard";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./styles.module.scss";

type Swiper = any;

interface IGamesGalleryProps {
  cards: INearGameCard[];
}

export const NearestGameSwiper: React.FC<IGamesGalleryProps> = ({ cards }) => {
  const swiperRef = React.useRef<Swiper | null>(null);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        className={styles.swiper}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <NearGameCard
              date={card.date}
              time={card.time}
              place={card.place}
              address={card.address}
              mapHref={card.mapHref}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
