// ShowMansSwiper.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowMansCard from "@entities/ShowMansCard/index";
import { RevolverButton } from "@shared/ui/Buttons/RevolverButton/index";

import "swiper/css";
import styles from "./styles.module.scss";

// Убедитесь, что пути к изображениям правильные
import ShowMan from "../../../assets/ShowMans/showman.webp";
// Добавьте другие пути для изображений, если есть

export const photos = [ShowMan, ShowMan];

export const showmans = [
  {
    name: "Ruslan Pricol",
    position: "Сотрудник",
  },
  {
    name: "Gaidar Lord",
    position: "Сотрудник",
  },
  {
    name: "Artyom Andre",
    position: "Сотрудник",
  },
  {
    name: "Zain Ihsan",
    position: "Сотрудник",
  },
  {
    name: "Erlan Erlanov",
    position: "Сотрудник",
  },
  {
    name: "Nurmukhamed Pofamet",
    position: "Сотрудник",
  },
  {
    name: "Aslanchik",
    position: "Сотрудник",
  },
  {
    name: "Dauren Pidor",
    position: "Сотрудник",
  },
];

interface ShowMansSwiperProps {
  photos: any[];
  showmans: Array<{
    name: string;
    position: string;
  }>;
}

type Swiper = any;

const ShowMansSwiper: React.FC<ShowMansSwiperProps> = ({
  photos,
  showmans,
}) => {
  const swiperRef = React.useRef<Swiper | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div>
      <div
        className={`${"flex items-center justify-end mb-12"} ${styles.buttons}`}
      >
        <div className="w-full m-auto"></div>
        <div className="flex justify-between w-[10%]">
          <RevolverButton
            buttonType="gallery"
            direction="previous"
            onClick={handlePrev}
          />
          <div className="scale-x-[-1]">
            <RevolverButton
              buttonType="gallery"
              direction="next"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
      <Swiper
        className="contacts__con__swiper"
        slidesPerView={4}
        spaceBetween={64}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
      >
        {showmans.map((showman, index) => (
          <SwiperSlide key={index}>
            <div className="flex">
              {/* Используйте фотографии из массива photos */}
              <ShowMansCard
                photo={photos[index]}
                name={showman.name}
                position={showman.position}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShowMansSwiper;
