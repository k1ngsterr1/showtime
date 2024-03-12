import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "@entities/ReviewCard/index";
import "swiper/css";

export const reviews = [
  {
    time: "09.03.24",
    name: "Ruslan Drochit",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Ruslan Drochit",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Ruslan Drochit",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Ruslan Drochit",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Ruslan Drochit",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    time: "09.03.24",
    name: "Ruslan Drochit",
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

export const SwiperReview: React.FC<SwiperReviewProps> = ({ reviews }) => {
  return (
    <div>
      <Swiper
        className="contacts__con__swiper"
        slidesPerView={1}
        spaceBetween={64}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex">
              <ReviewCard
                time={review.time}
                name={review.name}
                paragraph={review.paragraph}
              />
              <ReviewCard
                time={review.time}
                name={review.name}
                paragraph={review.paragraph}
              />
              <ReviewCard
                time={review.time}
                name={review.name}
                paragraph={review.paragraph}
              />
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
