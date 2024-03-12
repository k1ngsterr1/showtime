import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "@entities/ReviewCard/index";
import { RevolverButton } from "@shared/ui/Buttons/RevolverButton/index";
import "swiper/css";
import styles from "./styles.module.scss";

export const reviews = [
  {
    time: "09.03.24",
    name: "Ruslan Pricol",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Gaidar Lord",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Artyom Andre",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Zain Ihsan",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Maks Novicov",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Artem Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Askar Boss",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Linux",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
];

interface SwiperReviewProps {
  reviews: Array<{
    time: string;
    name: string;
    paragraph: string;
  }>;
}

type Swiper = any;

export const SwiperReview: React.FC<SwiperReviewProps> = ({ reviews }) => {
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
      <div className={`${"flex justify-end "} ${styles.buttons}`}>
        <div className="flex justify-between w-[10%]">
          <RevolverButton
            buttonType="gallery"
            direction="previous"
            onClick={handlePrev}
          ></RevolverButton>
          <div className="scale-x-[-1]">
            <RevolverButton
              buttonType="gallery"
              direction="next"
              onClick={handleNext}
            ></RevolverButton>
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
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex">
              <ReviewCard
                time={review.time}
                name={review.name}
                paragraph={review.paragraph}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperReview;
