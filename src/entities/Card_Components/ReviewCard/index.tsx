import React from 'react'
import RounderHat from '@shared/ui/Icons/RounderHat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'
export interface Props {
	text: string
	date: string
	name: string
	rating: number
}

const stars = Array(5).fill(0)

export const ReviewCard: React.FC<Props> = ({ date, name, text, rating }) => (
	<div className={styles.review}>
		<div className="flex flex-col items-start p-4">
			<span className="font-killbill text-lg">{date}</span>
			<div className="flex items-center gap-5 pt-2">
				<RounderHat />
				<span>{name}</span>
			</div>
			<div>
				<div className={styles.star}>
					{Array.from({ length: rating }, (_, index) => (
						<div key={index}>
							<FontAwesomeIcon
								icon={faStar}
								className={index < rating ? styles.starActive : styles.starInactive}
							/>
						</div>
					))}
				</div>
				<div className={styles.review__text}>
					<p className={`${'p-2 text-sm text-primary-dark'} ${styles.paragraph}`}>{text}</p>
				</div>
			</div>
		</div>
	</div>
)
