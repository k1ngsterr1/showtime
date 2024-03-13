import { useState } from "react";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import { ReactButton } from "@shared/ui/Buttons/DefaultReactButton";
import { Selector } from "@shared/ui/Selector";
import styles from "./styles.module.scss";

export const Form = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  return (
    <section className={styles.form_screen} id="contacts">
      <div className={styles.form_screen__container}>
        <h6 className="text-primary-red m-auto">Контакты</h6>
        <div className="w-[80%] flex justify-between items-center">
          {/* <div className="flex items-center m-auto w-[100%] justify-between"> */}
          {/* </div> */}
        </div>
        <form className={styles.form_screen__container__form}>
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-start">
              <Input
                type="text"
                inputType="default-red"
                placeholder="Ваше имя"
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
            {/* <YandexMap /> */}
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
      </div>
    </section>
  );
};
