import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useCustomLoad = () => {
  const loadRef = useRef(null);
  const imageRef = useRef(null);
  const redDivRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (
      loadRef.current &&
      imageRef.current &&
      redDivRef.current &&
      textRef.current
    ) {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        onComplete: () => {
          gsap.to(loadRef.current, {
            autoAlpha: 0,
            duration: 0.5,
            ease: "power1.out",
          });
        },
      });

      tl.to(imageRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 2,
        ease: "linear",
      });

      tl.to(
        redDivRef.current,
        {
          height: "100%",
          duration: 2,
          ease: "linear",
          onStart: () => {
            gsap.to(textRef.current, { color: "#F0E7BE", duration: 0.5 });
          },
        },
        0
      );

      tl.to(loadRef.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.out",
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  return { loadRef, imageRef, redDivRef, textRef };
};
