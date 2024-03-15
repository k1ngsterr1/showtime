import { useState, type SyntheticEvent } from "react";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";

import { Input } from "@shared/ui/Inputs/DefaultInput";
import PasswordInput from "@shared/ui/Inputs/PasswordInput/index";
import { loginAccount } from "@shared/lib/hooks/useLogin";

import styles from "../styles/styles.module.scss";
import { ErrorTab } from "@shared/ui/ErrorTab";

export const LoginForm = () => {
  const [loginError, setLoginError] = useState<any>(null);
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

    const error = await loginAccount(formData);

    setLoginError(error);

    if (error) {
      console.log("Error occurred:", error);
    } else {
      console.log("Login successful");
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
            {loginError && <ErrorTab text={loginError} />}
          </span>
        </div>
      </section>
    </>
  );
};
