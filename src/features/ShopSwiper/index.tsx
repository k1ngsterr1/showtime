import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShowCard, type IShopCard } from "@entities/ShopSwiperCards";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./styles.module.scss";

type Swiper = any;

interface IShowProps {
  cards: IShopCard[];
}

export const ShopSwiper: React.FC<IShowProps> = ({ cards }) => {
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
            <ShowCard
              heading={card.heading}
              desc={card.desc}
              photo={card.photo}
              price={card.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
