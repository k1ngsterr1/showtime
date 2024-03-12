import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import RevolverButton from "@shared/ui/Buttons/RevolverButton/index.astro";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./styles.module.scss";

const GalleryCustom = ({ photos }) => {
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
    <div className="container">
      <div
      // className="pc-gallery"
      // style={{ marginBottom: "clamp(64px,6.66624vw,256px)" }}
      >
        <div className="gallery-nav">
          <RevolverButton
            buttonType="gallery"
            className="previous"
            onClick={handlePrev}
          ></RevolverButton>
          <RevolverButton
            buttonType="gallery"
            className="next"
            onClick={handleNext}
          ></RevolverButton>
        </div>
      </div>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo.src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryCustom;
