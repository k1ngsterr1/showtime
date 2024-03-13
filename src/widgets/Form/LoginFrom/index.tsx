import Button from "../../../shared/ui/Buttons/DefaultButton/index.astro";
import BigText from "../../../shared/ui/BigText/index.astro";
import Paragraph from "../../../shared/ui/Paragraph/index.astro";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import PasswordInput from "@shared/ui/Inputs/PasswordInput/index";
import MiniText from "@shared/ui/MiniText/index.astro";

// import Logo from "../../../assets/logo/logo.svg";

import styles from "../styles/styles.module.scss";

import React from "react";

export const LoginForm = () => {
  return (
    <>
      <section className={styles.registration}>
        <div className={styles.registration__content}>
          <div className={styles.registration__logo}></div>
          <BigText text="Войдите в аккаунт" margin="mt-8" bigTextType="form" />
          <Paragraph
            paragraphType="white"
            margin="mt-8"
            width="42%"
            text="Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. "
          />
          <form className={styles.registration__form}>
            <Input
              placeholder="Электронная почта"
              inputType="default"
              margin="mt-4"
              type="email"
            />
            <PasswordInput placeholder="Пароль" margin="mt-4" type="password" />
            <Button
              text="Войти"
              buttonType="filled"
              type="submit"
              margin="mt-8"
            />
          </form>
          <MiniText
            margin="mt-10"
            href="registration"
            text="Еще нет аккунта? "
            linktext=" Создать"
          />
        </div>
      </section>
    </>
  );
};
