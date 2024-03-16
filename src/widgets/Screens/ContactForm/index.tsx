import React, { useState } from "react";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";
import { Selector } from "@shared/ui/Selector";
import { Map } from "@shared/ui/Map/index";
import Button from "@shared/ui/Buttons/DefaultButton/index.astro";
import { FormContent } from "@widgets/Screens/SelectedForm/index";

import styles from "./styles.module.scss";

export const Form = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [formType, setFormType] = useState<string>("");

  return (
    <>
      <section className={styles.form_screen_mob} id="contacts_mob">
        <div className={styles.form_screen__container}>
          <h6 className="text-primary-red m-auto">Контакты</h6>
          <div className="flex items-center m-auto flex-col w-[60%] justify-between">
            <ReactButton
              text="Продукция"
              buttonType="transparent"
              margin="mt-8"
              onClick={() => setFormType("production")}
            />
            <ReactButton
              text="Заказать"
              buttonType="transparent"
              margin="mt-8"
              onClick={() => setFormType("delivery")}
            />
            <ReactButton
              text="Запись"
              buttonType="transparent"
              margin="mt-8"
              onClick={() => setFormType("book")}
            />
            <ReactButton
              text="Задать вопрос"
              buttonType="transparent"
              margin="mt-8"
              onClick={() => setFormType("question")}
            />
          </div>
          <form className={styles.form_screen_mob__form}>
            <div className="flex flex-col items-center">
              <FormContent gameType={formType} />
            </div>
          </form>
          <div className="flex flex-col items-center">
            <a
              href="mailto:showtime@mafia.kz"
              className={`${styles.form_screen__container__form__link} mt-5`}
            >
              showtime@mafia.kz
            </a>
            <a
              href="tel:+77003333826"
              className={`${styles.form_screen__container__form__link} mt-5`}
            >
              +77003333826
            </a>
          </div>
          <Map />
        </div>
      </section>
      <section className={styles.form_screen}>
        <div className={styles.form_screen__container}>
          <h6 className="text-primary-red m-auto">Контакты</h6>
          <div className="flex items-center m-auto w-[60%] justify-between">
            <ReactButton
              text="Продукция"
              buttonType="transparent"
              margin="mt-8"
              onClick={() => setFormType("production")}
            />
            <ReactButton
              text="Заказать"
              buttonType="transparent"
              margin="mt-8"
              onClick={() => setFormType("delivery")}
            />
            <ReactButton
              text="Запись"
              buttonType="transparent"
              margin="mt-8"
              onClick={() => setFormType("book")}
            />
            <ReactButton
              text="Задать вопрос"
              buttonType="transparent"
              margin="mt-8"
              onClick={() => setFormType("question")}
            />
          </div>
          <div className="flex m-auto gap-40 items-start">
            <FormContent gameType={formType} />
            <Map />
          </div>
        </div>
      </section>
    </>
  );
};
