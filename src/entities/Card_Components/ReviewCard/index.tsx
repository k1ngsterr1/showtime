import React from 'react'
import styles from './styles.module.scss'
import RounderHat from '@shared/ui/Icons/RounderHat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export interface Props {
	paragraph: string
	time: string
	name: string
}

const stars = Array(5).fill(0)

export const ReviewCard: React.FC<Props> = ({ time, name, paragraph }) => (
	<div className={styles.review}>
		<div className="flex flex-col items-start p-4">
			<span className="font-killbill text-lg">{time}</span>
			<div className="flex items-center gap-5 pt-2">
				<RounderHat />
				<span>{name}</span>
			</div>
			<div>
				<div className={styles.star}>
					{stars.map((item, index) => (
						<div key={index}>
							<FontAwesomeIcon icon={faStar} className={styles.stars} />
						</div>
					))}
				</div>
				<div className={styles.review__text}>
					<p className={`${'p-2 text-sm text-primary-dark'} ${styles.paragraph}`}>{paragraph}</p>
				</div>
			</div>
		</div>
	</div>
)
