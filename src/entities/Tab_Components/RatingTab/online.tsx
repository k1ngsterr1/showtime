import { RatingHeader } from '@shared/ui/RatingHeader'
import { useGetOnlineStats } from '@shared/lib/hooks/Admin/Get/useGetOnlineStats'
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
	points: string
	loses: string
}

interface RatingTabProps {
	rating: RatingItem[]
}

const RatingTab: React.FC<RatingTabProps> = () => {
	const { getOnlineStats, statData } = useGetOnlineStats()

	useEffect(() => {
		getOnlineStats()
	}, [])

	return (
		<div className={styles.container}>
			<div className="">
				{statData?.map((item, index) => (
					<RatingHeader
						key={index}
						kfc={item.winrate}
						score={item.points}
						wins={item.wins}
						icon={item.icon}
						margin="mt-8"
						name={item.user.username}
						number={index + 1}
						games={item.total}
						loses={item.losses}
					/>
				))}
			</div>
		</div>
	)
}

export default RatingTab
