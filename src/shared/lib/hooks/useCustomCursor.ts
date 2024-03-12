import { useEffect, type SyntheticEvent } from "react";
import gsap from "gsap";

export const useCustomCursor = (cursorRef: any) => {
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: x,
          y: y,
          duration: 0.1,
          ease: "power3.out",
        });
      }
    };
    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);
};
