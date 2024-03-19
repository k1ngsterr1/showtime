import React from "react";
import { AdminTableService } from "@entities/AdminEntities/AdminTableService/index";

export const services = [
  {
    id: "s666",
    service: "Сушист",
    price: "667",
    time: "Почасово",
  },
];

interface ITable {
  services: Array<{
    id: string;
    service: string;
    price: number;
    time: string;
  }>;
}

export const ServiceTable: React.FC<ITable> = ({ services }) => {
  return (
    <>
      {services.map((item, index) => (
        <AdminTableService
          key={index}
          id={item.id}
          service={item.service}
          price={item.price}
          time={item.time}
        />
      ))}
    </>
  );
};
