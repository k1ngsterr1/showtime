import React from "react";
import { StatsLine } from "@shared/ui/StatsLine";
import statsConfig from "@shared/lib/content/statsContent";

export const UserStats = () => {
  return (
    <div className="w-full  flex flex-col items-start mt-12">
      <span className="text-primary-red text-4xl font-neoregular">
        Персональная статистика
      </span>
      {statsConfig.map((stat, index) => (
        <StatsLine key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};
