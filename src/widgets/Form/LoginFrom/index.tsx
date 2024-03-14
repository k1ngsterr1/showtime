import { useState } from "react";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";

import { Input } from "@shared/ui/Inputs/DefaultInput";
import PasswordInput from "@shared/ui/Inputs/PasswordInput/index";

import styles from "../styles/styles.module.scss";
import { loginAccount } from "@shared/lib/hooks/useLogin";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      console.log(formData);
      await loginAccount(formData);
    } catch (error) {
      console.error("Account creation failed:", error);
    }
  };

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
          <form className={styles.registration__form} onSubmit={handleSubmit}>
            <Input
              placeholder="Электронная почта"
              inputType="default"
              margin="mt-4"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <PasswordInput
              placeholder="Пароль"
              margin="mt-4"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
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
