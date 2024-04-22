import { RatingHeader } from '@shared/ui/RatingHeader'

import styles from './styles.module.scss'

interface RatingItem {
	kfc: string
	wins: string
	icon: string
	margin: string
	name: string
	number: string
	games: string
	id: string
	score: string
	loses: string
}

interface RatingTabProps {
	rating: RatingItem[]
}

const RatingTab: React.FC<RatingTabProps> = ({ rating }) => {
	return (
		<div className={styles.container}>
			<div className="">
				{rating.map((item, index) => (
					<RatingHeader
						key={index}
						id={item.id}
						kfc={item.kfc}
						score={item.score}
						wins={item.wins}
						icon={item.icon}
						margin={item.margin}
						name={item.name}
						number={item.number}
						games={item.games}
						loses={item.loses}
					/>
				))}
			</div>
		</div>
	)
}

export default RatingTab
