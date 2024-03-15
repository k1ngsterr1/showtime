import React, { useState } from "react";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import { Selector } from "@shared/ui/Selector";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";

import styles from "../ContactForm/styles.module.scss";

interface IFormContentProps {
  gameType: string;
}

export const FormContent: React.FC<IFormContentProps> = ({ gameType }) => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const renderContent = () => {
    switch (gameType) {
      case "production":
        return (
          <div>
            <form className={styles.form_screen_mob__form}>
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
                <ReactButton
                  text="Отправить"
                  buttonType="filled"
                  margin="mt-8"
                />
              </div>
            </form>
          </div>
        );
      case "delivery":
        return (
          <div>
            <form className={styles.form_screen_mob__form}>
              <div className="flex flex-col items-start mt-16">
                <Input
                  type="text"
                  inputType="default-red"
                  placeholder="Введите ваше имя"
                  margin="mt-8"
                />
                <Input
                  type="email"
                  inputType="default-red"
                  placeholder="Ваша почта"
                  margin="mt-8"
                />
                <Input
                  type="phone"
                  inputType="default-red"
                  placeholder="Номер телефона"
                  margin="mt-8"
                />
                <Selector
                  placeholder="Выберите товар"
                  selectedValue={selectedRole}
                  onChange={setSelectedRole}
                  items={[
                    "Шляпа Мафиози",
                    "Набор карт",
                    "Кувшин",
                    "Малафья руслана",
                  ]}
                />
                <ReactButton
                  text="Отправить"
                  buttonType="filled"
                  margin="mt-8"
                />
              </div>
            </form>
          </div>
        );
      case "book":
        return (
          <div>
            <form className={styles.form_screen_mob__form}>
              <div className="flex flex-col items-start mt-16">
                <Input
                  type="text"
                  inputType="default-red"
                  placeholder="Введите ваше имя"
                  margin="mt-8"
                />
                <Input
                  type="email"
                  inputType="default-red"
                  placeholder="Ваша почта"
                  margin="mt-8"
                />
                <Input
                  type="phone"
                  inputType="default-red"
                  placeholder="Номер телефона"
                  margin="mt-8"
                />
                <Input
                  type="date"
                  inputType="default-red"
                  placeholder="Введите дату"
                  margin="mt-8"
                />
                <ReactButton
                  text="Отправить"
                  buttonType="filled"
                  margin="mt-8"
                />
              </div>
            </form>
          </div>
        );
      case "question":
        return (
          <div>
            <form className={styles.form_screen_mob__form}>
              <div className="flex flex-col items-start mt-16">
                <Input
                  type="text"
                  inputType="default-red"
                  placeholder="Введите ваше имя"
                  margin="mt-8"
                />
                <Input
                  type="email"
                  inputType="default-red"
                  placeholder="Ваша почта"
                  margin="mt-8"
                />
                <Input
                  type="phone"
                  inputType="default-red"
                  placeholder="Ваш вопрос"
                  margin="mt-8"
                />
                <ReactButton
                  text="Отправить"
                  buttonType="filled"
                  margin="mt-8"
                />
              </div>
            </form>
          </div>
        );
    }
  };
  return <>{renderContent()}</>;
};
