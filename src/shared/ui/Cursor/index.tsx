import { useRef } from "react";
import { useCustomCursor } from "@shared/lib/hooks/useCustomCursor";
import pistol from "@assets/logo/revolver.svg";

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  useCustomCursor(cursorRef);

  console.log(cursorRef);

  return (
    <div
      ref={cursorRef}
      style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}
    >
      <img
        src={pistol.src}
        alt="pistol"
        style={{ width: "64px", height: "64px" }}
      />
    </div>
  );
};
