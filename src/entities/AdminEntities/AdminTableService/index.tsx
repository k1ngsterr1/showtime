import React from "react";

import styles from "./styles.module.scss";

interface Props {
  id: string;
  service: string;
  price: number;
  time: string;
}
export const AdminTableService: React.FC<Props> = ({
  id,
  service,
  price,
  time,
}) => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <tr className={styles.table__header_row}>
          <th className={styles.table__header__item}>ID</th>
          <th className={styles.table__header__item}>Услуга </th>
          <th className={styles.table__header__item}>Цена</th>
          <th className={styles.table__header__item}>Оплата</th>
        </tr>
      </thead>
      <tbody className={styles.table__content}>
        <tr className={styles.table__content_row}>
          <td className={styles.table__content_item}>{id}</td>
          <td className={styles.table__content_item}>{service}</td>
          <td className={styles.table__content_item}>{price}</td>
          <td className={styles.table__content_item}>{time}</td>
        </tr>
        <tr className={styles.table__content_row}>
          <td className={styles.table__content_item}>{id}</td>
          <td className={styles.table__content_item}>{service}</td>
          <td className={styles.table__content_item}>{price}</td>
          <td className={styles.table__content_item}>{time}</td>
        </tr>
        <tr className={styles.table__content_row}>
          <td className={styles.table__content_item}>{id}</td>
          <td className={styles.table__content_item}>{service}</td>
          <td className={styles.table__content_item}>{price}</td>
          <td className={styles.table__content_item}>{time}</td>
        </tr>
        <tr className={styles.table__content_row}>
          <td className={styles.table__content_item}>{id}</td>
          <td className={styles.table__content_item}>{service}</td>
          <td className={styles.table__content_item}>{price}</td>
          <td className={styles.table__content_item}>{time}</td>
        </tr>
      </tbody>
    </table>
  );
};
