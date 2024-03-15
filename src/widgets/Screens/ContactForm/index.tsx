import React, { useState } from "react";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";
import { Selector } from "@shared/ui/Selector";
import { Map } from "@shared/ui/Map/index";
import Button from "@shared/ui/Buttons/DefaultButton/index.astro";
import styles from "./styles.module.scss";

export const Form = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  return (
    <>
      <section className={styles.form_screen_mob} id="contacts_mob">
        <div className={styles.form_screen__container}>
          <h6 className="text-primary-red m-auto">Контакты</h6>
          <div className="flex items-center m-auto flex-col w-[60%] justify-between">
            <ReactButton text="Продукция" buttonType="filled" margin="mt-8" />
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
          </div>
          <form className={styles.form_screen_mob__form}>
            <div className="flex flex-col items-center">
              <Input
                type="text"
                inputType="default-red"
                placeholder="Ваше имя"
                margin="mt-12"
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
