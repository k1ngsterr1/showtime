import styles from "./styles.module.scss";

export const Form = () => {
  return (
    <section className={styles.form_screen}>
      <div className={styles.form_screen__container}>
        <h6 className="text-primary-red">Контакты</h6>
        <div className="w-[80%] flex justify-between items-center"></div>
        <form className={styles.form_screen__form}>
          <div className="flex flex-col items-start"></div>
        </form>
      </div>
    </section>
  );
};
