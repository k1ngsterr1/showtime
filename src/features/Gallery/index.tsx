import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { RevolverButton } from "@shared/ui/Buttons/RevolverButton";
import { useCustomSwiper } from "@shared/lib/hooks/useCustomSwipes";

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

  const { handleNext, handlePrev } = useCustomSwiper(swiperRef);

  return (
<<<<<<< HEAD
    <div className="container">
      <div
      // className="pc-gallery"
      // style={{ marginBottom: "clamp(64px,6.66624vw,256px)" }}
      >
        <div className="gallery-nav">
          <RevolverButton
            buttonType="gallery"
            direction="previous"
            onClick={handlePrev}
          />
          <RevolverButton
            buttonType="gallery"
            direction="next"
            onClick={handleNext}
          />
        </div>
=======
    <div className={styles.container}>
      <div className={styles.gallery_nav}>
        <RevolverButton
          buttonType="gallery"
          direction="right"
          onClick={handlePrev}
        ></RevolverButton>
>>>>>>> 0de9cb8a1b280fe0930ea1538fd396a54f5a9bc1
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
