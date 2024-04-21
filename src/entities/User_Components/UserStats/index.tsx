import React from 'react';
import { StatsLine } from '@shared/ui/StatsLine';
import { useGetScore } from '@shared/lib/hooks/useGetScore';


export const UserStats = () => {
    const { scoreData } = useGetScore();




	
	const statsArray = [
		{ title: 'Тотал', value: scoreData?.totalGames.toString() }, 
		{ title: 'Победы', value: scoreData?.totalWins.toString() }, 
		{ title: 'Проигрыши', value: scoreData?.totalLoses.toString() }
	];

	console.log(statsArray)
	

    return (
        <div className="mt-12 flex w-full flex-col items-start">
            <span className="font-neoregular text-4xl text-primary-red">Статистика</span>
            {statsArray.map((stat, index) => (
                <StatsLine key={index} title={stat.title} value={stat.value} />
            ))}
        </div>
    );
};
