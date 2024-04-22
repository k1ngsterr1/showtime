import { RatingHeader } from '@shared/ui/RatingHeader'
import { useGetOffStats } from '@shared/lib/hooks/Admin/Get/useGetOffStats'
import styles from './styles.module.scss'
import { useEffect } from 'react'

interface RatingItem {
	winrate: string
	wins: string
	icon: string
	margin: string
	name: string
	number: string
	games: string
	id: string
	score: string
	trophy: string
	loses: string
}

interface RatingTabProps {
	rating: RatingItem[]
}

const RatingTab: React.FC<RatingTabProps> = () => {
	const { getStats, statData } = useGetOffStats()

	useEffect(() => {
		getStats()
	}, [])

	return (
		<div className={styles.container}>
			<div className="">
				{statData?.map((item, index) => (
					<RatingHeader
						key={index}
						id={item.id}
						kfc={item.winrate}
						score={item.points}
						wins={item.wins}
						icon={item.icon}
						margin={item.margin}
						name={item.username}
						number={index + 1}
						games={item.total}
						loses={item.loss}
					/>
				))}
			</div>
		</div>
	)
}

export default RatingTab
