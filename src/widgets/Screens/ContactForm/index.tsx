import { useState } from "react";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import { ReactButton } from "@shared/ui/Buttons/DefaultReactButton";
import { Selector } from "@shared/ui/Selector";
import GoogleMap from "@shared/ui/GoogleMap/index";
import { Map } from "@shared/ui/Map/index";

import Button from "@shared/ui/Buttons/DefaultButton/index.astro";
import styles from "./styles.module.scss";

export const Form = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  return (
    <>
      <section className={styles.form_screen_mob} id="contacts">
        <div className={styles.form_screen__container}>
          <h6 className="text-primary-red m-auto">Контакты</h6>
          <div className="flex items-center m-auto flex-col">
            <ReactButton text="Отправить" buttonType="filled" margin="mt-8" />
            <ReactButton
              text="Заказать"
              buttonType="transparent"
              margin="mt-8"
            />
            <ReactButton text="Запись" buttonType="transparent" margin="mt-8" />
            <ReactButton
              text="Задать вопрос"
              buttonType="transparent"
              margin="mt-8"
            />
<<<<<<< HEAD
    <section className={styles.form_screen} id="contacts">
      <div className={styles.form_screen__container}>
        <h6 className="text-primary-red m-auto">Контакты</h6>
        <div className="flex items-center m-auto w-[60%] justify-between">
          <ReactButton text="Отправить" buttonType="filled" margin="mt-8" />
          <ReactButton text="Заказать" buttonType="transparent" margin="mt-8" />
          <ReactButton text="Запись" buttonType="transparent" margin="mt-8" />
          <ReactButton
            text="Задать вопрос"
            buttonType="transparent"
            margin="mt-8"
          />
        </div>
        <form className={styles.form_screen__container__form}>
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-start mt-16">
              <Input
                type="text"
                inputType="default-red"
                placeholder="Ваше имя"
                margin="mt-8"
              />
              <Input
                type="phone"
                inputType="default-red"
                placeholder="Номер телефона"
                margin="mt-8"
              />
              <Selector
                placeholder="Продукт"
                selectedValue={selectedRole}
                onChange={setSelectedRole}
                items={[
                  "Вечерняя Игра",
                  "Вечерняя Игра",
                  "Вечерняя Игра",
                  "Вечерняя Игра",
                ]}
              />
              <ReactButton text="Отправить" buttonType="filled" margin="mt-8" />
            </div>
            <Map />
=======
>>>>>>> 925fd5c3b230328b1508939a1abdd548fdc1ccb9
          </div>
          <form className={styles.form_screen__container__form}>
            <div className="flex justify-between items-start">
              <div
                className={`${"flex flex-col items-center"} ${styles.buttons}`}
              >
                <Input
                  type="text"
                  inputType="default-red"
                  placeholder="Ваше имя"
                  margin="mt-8"
                />
                <Input
                  type="phone"
                  inputType="default-red"
                  placeholder="Номер телефона"
                  margin="mt-8"
                />
                <Selector
                  placeholder="Продукт"
                  selectedValue={selectedRole}
                  onChange={setSelectedRole}
                  items={[
                    "Вечерняя Игра",
                    "Вечерняя Игра",
                    "Вечерняя Игра",
                    "Вечерняя Игра",
                  ]}
                />
                <ReactButton
                  text="Отправить"
                  buttonType="filled"
                  margin="mt-8"
                />
              </div>
            </div>
            <div className="flex flex-col">
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
                +7 (700) 333-38-26
              </a>
            </div>
          </form>
          <GoogleMap />
        </div>
      </section>
      <section className={styles.form_screen} id="contacts">
        <div className={styles.form_screen__container}>
          <h6 className="text-primary-red m-auto">Контакты</h6>
          <div className="flex items-center m-auto w-[60%] justify-between">
            <ReactButton text="Отправить" buttonType="filled" margin="mt-8" />
            <ReactButton
              text="Заказать"
              buttonType="transparent"
              margin="mt-8"
            />
            <ReactButton text="Запись" buttonType="transparent" margin="mt-8" />
            <ReactButton
              text="Задать вопрос"
              buttonType="transparent"
              margin="mt-8"
            />
            <section />
          </div>
          <div className="flex m-auto gap-40 items-start">
            <div className="flex flex-col items-start mt-16">
              <Input
                type="text"
                inputType="default-red"
                placeholder="Ваше имя"
                margin="mt-8"
              />
              <Input
                type="phone"
                inputType="default-red"
                placeholder="Номер телефона"
                margin="mt-8"
              />
              <Selector
                placeholder="Продукт"
                selectedValue={selectedRole}
                onChange={setSelectedRole}
                items={[
                  "Вечерняя Игра",
                  "Вечерняя Игра",
                  "Вечерняя Игра",
                  "Вечерняя Игра",
                ]}
              />
              <ReactButton text="Отправить" buttonType="filled" margin="mt-8" />
            </div>
            <Map />
          </div>
        </div>
      </section>
    </>
  );
};
