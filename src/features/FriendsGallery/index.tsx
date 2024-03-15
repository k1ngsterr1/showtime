import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NearGameCard, type INearGameCard } from "@entities/NearGameCard";

import "swiper/css";
import "swiper/css/navigation";

import { FriendAvatar, type IFriendAvatarProps } from "@shared/ui/FriendAvatar";

import styles from "./styles.module.scss";

type Swiper = any;

interface IFriendsGalleryProps {
  friends: IFriendAvatarProps[];
}

export const FriendsGallery: React.FC<IFriendsGalleryProps> = ({ friends }) => {
  const swiperRef = React.useRef<Swiper | null>(null);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        className={styles.swiper}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
      >
        {friends.map((friend, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <FriendAvatar photo={friend.photo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
