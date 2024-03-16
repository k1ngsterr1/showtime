import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, type ICardProps } from "@entities/Card";
import { SelectedBar } from "@shared/ui/SelectedBar";

import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";

interface CardGalleryProps {
  cards: ICardProps[];
}

type Swiper = any;

export const CardGalleryMob: React.FC<CardGalleryProps> = ({ cards }) => {
  const swiperRef = React.useRef<Swiper | null>(null);

  return (
    <div>
      <div className="mt-8">
        <Swiper
          className=""
          slidesPerView={1}
          spaceBetween={32}
          onSwiper={(swiperInstance) => {
            swiperRef.current = swiperInstance;
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <Card
                  name={card.name}
                  paragraph={card.paragraph}
                  iconType={card.iconType.src}
                  icon={card.icon.src}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col items-center mt-8">
        <span className={styles.text_container__heading}>Заголовок</span>
        <SelectedBar text="Тип игрока" />
        <p
          className={`${styles.text_container__paragraph} text-center w-[75%] mt-6`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
