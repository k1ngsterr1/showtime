import PasswordInput from "@shared/ui/Inputs/PasswordInput/index";
import Button from "../../../shared/ui/Buttons/DefaultButton/index.astro";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import { ReactButton } from "@shared/ui/Buttons/DefaultReactButton";
import { createAccount } from "@shared/lib/hooks/useCreateAccount";
import { useState } from "react";

import styles from "../styles/styles.module.scss";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await createAccount(formData);
      // If successful, you might want to redirect or update the UI accordingly
    } catch (error) {
      // Handle the error, maybe show a message to the user
      console.error("Account creation failed:", error);
    }
  };

  return (
    <div>
      <section className={styles.registration}>
        <div className={styles.registration__content}>
          <div className={styles.registration__logo}></div>
          <h2 className={styles.registration__heading}>Пройдите регистрацию</h2>
          <p className={styles.registration__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <form className={styles.registration__form} onSubmit={handleSubmit}>
            <Input
              placeholder="Имя"
              name="name"
              inputType="default"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Электронная почта"
              name="email"
              inputType="default"
              margin="mt-4"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <PasswordInput
              placeholder="Пароль"
              name="password"
              margin="mt-4"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <PasswordInput
              placeholder="Подтвердите пароль"
              name="passwordConfirmation"
              margin="mt-4"
              type="password"
              value={formData.passwordConfirmation}
              onChange={handleInputChange}
            />
          </form>
          <ReactButton
            buttonType="filled"
            text="Создать аккаунт"
            type="submit"
            margin="mt-8"
          />
          <span className={styles.registration__mini_text}>
            Уже есть аккаунт?{" "}
            <a href="/login" className="text-primary-red">
              {" "}
              Войти
            </a>{" "}
          </span>
        </div>
      </section>
    </div>
  );
};
