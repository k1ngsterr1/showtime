import React from "react";
import styles from "./styles.module.scss";

interface Props {
  paragraph: string;
  data: string;
  name: string;
}

const ReviewCard: React.FC<Props> = ({ data, name, paragraph }) => (
  <div className={styles.review_card}>
    <div className="flex flex-col items-start p-4">
      <div className="flex gap-6 pt-2">
        <span>{name}</span>
      </div>
      <span className="font-killbill">{data}</span>
      <div className="pt-4">
        <p
          className={`${"mt-4 text-primary-dark text-lg"} ${styles.paragraph}`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  </div>
);

export default ReviewCard;
