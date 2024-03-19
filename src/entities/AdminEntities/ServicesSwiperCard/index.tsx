import React from "react";
import Card from "./card";

import index from "./index.module.scss";

export const services = [
  {
    number: "01",
    name: "Photo",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "02",
    name: "Video",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "03",
    name: "Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "04",
    name: "Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "05",
    name: "Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "06",
    name: "Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const CardList: React.FC = () => {
  return (
    <div className={index.card}>
      {services.map((service, index) => (
        <Card
          key={index}
          number={service.number}
          name={service.name}
          paragraph={service.paragraph}
        />
      ))}
    </div>
  );
};

export default CardList;
