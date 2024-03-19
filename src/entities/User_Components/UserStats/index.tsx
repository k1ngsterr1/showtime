import { StatsLine } from '@shared/ui/StatsLine'
import statsConfig from '@shared/lib/content/statsContent'

export const UserStats = () => {
	return (
		<div className="mt-12 flex w-full flex-col items-start">
			<span className="font-neoregular text-4xl text-primary-red">Статистика</span>
			{statsConfig.map((stat, index) => (
				<StatsLine key={index} title={stat.title} value={stat.value} />
			))}
		</div>
	)
}
