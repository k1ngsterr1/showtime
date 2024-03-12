import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { RevolverButton } from "@shared/ui/Buttons/RevolverButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./styles.module.scss";

type Swiper = any;

interface IGalleryProps {
  photos: any[];
}

export const GalleryCustom: React.FC<IGalleryProps> = ({ photos }) => {
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
    <div className={styles.container}>
      <div className={styles.gallery_nav}>
        <RevolverButton
          buttonType="gallery"
          direction="left"
          onClick={handlePrev}
        ></RevolverButton>
        <RevolverButton
          buttonType="gallery"
          direction="right"
          onClick={handleNext}
        ></RevolverButton>
      </div>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        loop
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => console.log("slide change")}
      >
        {photos.map((photo: ImageMetadata, index: number) => (
          <SwiperSlide key={index}>
            <img src={photo.src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
