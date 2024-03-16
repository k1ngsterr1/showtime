import React from "react";
import styles from "./styles.module.scss";

import Mob from "@assets/Card/freedom.svg";

interface Props {
  margin?: string;
}

const MobSlide: React.FC<Props> = ({ margin }) => {
  const MarqueeClass = `${styles.marquee} ${margin ? margin : ""}`;

  return (
    <div className={MarqueeClass}>
      <div className={styles.item}>
        <img className={styles.img} src={Mob.src} alt="" />
      </div>
    </div>
  );
};

export default MobSlide;
