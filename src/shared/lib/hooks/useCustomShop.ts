import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useCustomShop = () => {
  const onShopOpen = () => {
    gsap.to("#shop", {
      top: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const onShopClose = () => {
    gsap.to("#shop", {
      top: -1000,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return { onShopOpen, onShopClose };
};
