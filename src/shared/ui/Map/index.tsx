import styles from "./styles.module.scss";

export const Map = () => {
  return (
    <div style={{ width: "50%" }} className={styles.map}>
      <iframe
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://maps.google.com/maps?width=50%25&amp;height=400&amp;hl=en&amp;q=%D0%91%D0%B0%D0%B9%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%20280+(ShowTime)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps systems</a>
      </iframe>
    </div>
  );
};
