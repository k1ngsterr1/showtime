import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "@entities/ProductsCard/index";
import { RevolverButton } from "@shared/ui/Buttons/RevolverButton/index";
import { useCustomSwiper } from "@shared/lib/hooks/useCustomSwipes";

import photo from "@assets/About/card_product.webp";

import styles from "./styles.module.scss";
import "swiper/css";

export const products = [
  {
    photo: photo,
    heading: "Набор карт “Мафия”",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "15000 тг",
  },
  {
    photo: photo,
    heading: "Набор карт “Мафия”",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "15000 тг",
  },
  {
    photo: photo,
    heading: "Набор карт “Мафия”",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "15000 тг",
  },
  {
    photo: photo,
    heading: "Набор карт “Мафия”",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "15000 тг",
  },
];

interface SwiperProductsProps {
  products: Array<{
    photo: ImageMetadata;
    heading: string;
    paragraph: string;
    price: string;
  }>;
}

type Swiper = any;

export const CardSwiper: React.FC<SwiperProductsProps> = ({ products }) => {
  const swiperRef = React.useRef<Swiper | null>(null);

  const { handlePrev, handleNext } = useCustomSwiper(swiperRef);

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className="w-full m-auto">
          <h3 className="text-primary-red ">Продукция</h3>
        </div>
        <div className={styles.container__buttons}>
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
        // className="contacts__con__swiper"
        slidesPerView={3}
        spaceBetween={64}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            {/* <div className=""> */}
            <ProductCard
              photo={product.photo}
              heading={product.heading}
              paragraph={product.paragraph}
              price={product.price}
            />
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
