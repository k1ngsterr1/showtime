import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import men from "../../assets/Gallery/men.webp";
import womanman from "../../assets/Gallery/womanman.webp";
import women from "../../assets/Gallery/women.webp";
import womenjar from "../../assets/Gallery/womenjar.webp";
import womenkatana from "../../assets/Gallery/womenkatana.webp";

const photos = [men, womanman, women, womenjar, womenkatana];

const GalleryCustom = () => {
  return (
    <div className="container">
      <Swiper
        classNams={styles}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
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
