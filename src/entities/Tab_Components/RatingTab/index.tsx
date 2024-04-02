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
						kfc={item.kfc}
						wins={item.wins}
						icon={item.icon}
						margin={item.margin}
						name={item.name}
						number={item.number}
						games={item.games}
					/>
				))}
			</div>
		</div>
	)
}

export default RatingTab
