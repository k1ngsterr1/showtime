import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HistoryCard from "@entities/HistoryCard/index";
import { RevolverButton } from "@shared/ui/Buttons/RevolverButton/index";

import "swiper/css";
import styles from "./styles.module.scss";

export const history = [
  {
    name: "Ruslan Pricol",
    data: "2020",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. ",
  },
  {
    name: "Gaidar Lord",
    data: "2020",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. ",
  },
  {
    name: "Artyom Andre",
    data: "2020",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. ",
  },
  {
    name: "Zain Ihsan",
    data: "2020",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. ",
  },
  {
    name: "Zain Ihsan",
    data: "2020",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. ",
  },
  {
    name: "Zain Ihsan",
    data: "2020",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. ",
  },
  {
    name: "Zain Ihsan",
    data: "2020",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. ",
  },
  {
    name: "Zain Ihsan",
    data: "2020",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. ",
  },
];

interface SwiperHistoryProps {
  history: Array<{
    data: string;
    name: string;
    paragraph: string;
  }>;
}

type Swiper = any;

export const SwiperHistory: React.FC<SwiperHistoryProps> = ({ history }) => {
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
        slidesPerView={2}
        spaceBetween={64}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
      >
        {history.map((history, index) => (
          <SwiperSlide key={index}>
            <div className="flex">
              <HistoryCard
                name={history.name}
                data={history.data}
                paragraph={history.paragraph}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHistory;
