import React, { useState } from "react";
import { Input } from "@shared/ui/Inputs/DefaultInput";
import { Selector } from "@shared/ui/Selector";
import ReactButton from "@shared/ui/Buttons/DefaultReactButton";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

import styles from "../ContactForm/styles.module.scss";
import "react-calendar/dist/Calendar.css";

interface IFormContentProps {
  gameType: string;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const FormContent: React.FC<IFormContentProps> = ({ gameType }) => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  // const [selectedShow, setSelectedShow] = useState<string>("");
  const [value, setValue] = useState(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDate = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (newValue: React.SetStateAction<Date>) => {
    setValue(newValue);
    setIsOpen(false);
  };

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
                <div className="" onClick={toggleDate}>
                  <Input
                    type="onlyread"
                    inputType="default-red"
                    placeholder="Выберите дату"
                    margin="mt-8"
                    value={format(value, "dd MMM yyyy", { locale: ru })}
                  />
                  <div className="absolute w-[80%]">
                    {isOpen && <Calendar onChange={onChange} value={value} />}
                  </div>
                </div>
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
      case "show":
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
                <Input
                  type="phone"
                  inputType="default-red"
                  placeholder="Укажите имя ведущего"
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
