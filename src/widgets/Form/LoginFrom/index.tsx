import Button from "../../../shared/ui/Buttons/DefaultButton/index.astro";
import BigText from "../../../shared/ui/BigText/index.astro";
import Paragraph from "../../../shared/ui/Paragraph/index.astro";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import PasswordInput from "@shared/ui/Inputs/PasswordInput/index";
// import MiniText from "@shared/ui/MiniText/index.astro";

// import Logo from "../../../assets/logo/logo.svg";

import styles from "../styles/styles.module.scss";
import { ReactButton } from "@shared/ui/Buttons/DefaultReactButton";

export const LoginForm = () => {
  return (
    <>
      <section className={styles.registration}>
        <div className={styles.registration__content}>
          <div className={styles.registration__logo}></div>
          <h2 className={styles.registration__heading}>Войдите в аккаунт</h2>
          <p className={styles.registration__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <form className={styles.registration__form}>
            <Input
              placeholder="Электронная почта"
              inputType="default"
              margin="mt-4"
              type="email"
            />
            <PasswordInput placeholder="Пароль" margin="mt-4" type="password" />
            <ReactButton
              text="Войти"
              buttonType="filled"
              type="submit"
              margin="mt-8"
            />
          </form>
          <span className={styles.registration__mini_text}>
            Еще нет аккаунта?{" "}
            <a href="/registration" className="text-primary-red">
              {" "}
              Создать аккаунт
            </a>{" "}
          </span>
        </div>
      </section>
    </>
  );
};
