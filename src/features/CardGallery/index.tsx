import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@entities/Card";
import { useCustomSwiper } from "@shared/lib/hooks/useCustomSwipes";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Swiper = any;

interface ICardGalleryProps {
  photos: any[];
}

export const CardGallery: React.FC<ICardGalleryProps> = ({ photos }) => {
  const swiperRef = React.useRef<Swiper | null>(null);

  const { handleNext, handlePrev } = useCustomSwiper(swiperRef);

  return (
    <Swiper>
      {photos.map((photo: ImageMetadata, index: number) => (
        <SwiperSlide key={index}>
          <Card />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
