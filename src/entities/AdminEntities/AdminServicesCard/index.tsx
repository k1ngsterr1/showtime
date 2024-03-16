import { Input } from "@shared/ui/Inputs/DefaultInput/index";
import AddButton from "@shared/ui/AddButton";
import NavigationButton from "@shared/ui/Buttons/NavigationButton/index.astro";

import styles from "./styles.module.scss";
import "@shared/styles/global.scss";
import { Link } from "react-scroll";

interface ICardProps {}

export const ServiceCard = () => {
  return (
    <>
      <div className="styles card">
        <h1>01</h1>
        <Input inputType="default-red" placeholder="Какой заказ" type="text" />
        <Input inputType="default" placeholder="текст" type="text" />
      </div>
      <AddButton buttonType="filled" text="Добавить" />
      <NavigationButton buttonType="filled" href="#" text="Смотреть все" />
    </>
  );
};
