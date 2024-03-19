import PasswordInput from "@shared/ui/Inputs/PasswordInput/index";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import { createAccount } from "@shared/lib/hooks/useCreateAccount";
import { useState } from "react";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";
import FileInput from "@shared/ui/Inputs/FileForm/index";

import styles from "../styles/styles.module.scss";

export const VcancieForm = () => {
  const [loginError, setLoginError] = useState<any>(null);
  const [formData, setFormData] = useState({
    username: "",
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
      const error = await createAccount(formData);
      setLoginError(error);
      console.log(loginError);
    } catch (error) {
      console.error("Account creation failed:", error);
    }
  };

  return (
    <div>
      <section className={styles.registration}>
        <div className={styles.registration__content}>
          <div className={styles.registration__logo}></div>
          <h2 className={styles.registration__heading}>Форма для вакансий</h2>
          <p className={styles.registration__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <form className={styles.registration__form} onSubmit={handleSubmit}>
            <Input
              placeholder="Имя"
              name="username"
              inputType="default"
              type="text"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Номер телефона"
              name="number"
              inputType="default"
              margin="mt-4"
              type="phone"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <FileInput
              placeholder="Ваше резюме"
              margin="mt-4"
              id="file-upload"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => console.log(e.target.files)}
            />
            <ReactButton
              buttonType="filled"
              text="Отправить"
              type="submit"
              onClick={() => formData}
              margin="mt-8"
            />
          </form>
        </div>
      </section>
    </div>
  );
};
