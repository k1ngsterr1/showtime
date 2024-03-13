import React from "react";
import styles from "./styles.module.scss";
import RounderHat from "@shared/ui/Icons/RounderHat";
import { Stars } from "@shared/ui/Icons/Stars";

// Интерфейс для пропсов, если вы используете TypeScript
interface Props {
  paragraph: string;
  time: string;
  name: string;
}

const ReviewCard: React.FC<Props> = ({ time, name, paragraph }) => (
  <div className={styles.review_card}>
    <div className="flex flex-col items-start p-4">
      <span className="font-killbill text-lg">{time}</span>
      <div className="flex gap-6 pt-2">
        <RounderHat />
        <span>{name}</span>
      </div>
      <div className="pt-4">
        <Stars />
        <p className="mt-4 text-primary-dark text-lg">{paragraph}</p>
      </div>
    </div>
  </div>
);

export default ReviewCard;
