import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

interface StarRatingProps {}

const StarRating: React.FC<StarRatingProps> = () => {
	const stars = Array(5).fill(0)

	const [currentItem, setCurrentItem] = useState<number | null>(null)

	return (
		<div className={styles.star}>
			{stars.map((item, index) => (
				<div
					key={index}
					onClick={() => setCurrentItem(index)}
					style={{ color: index <= currentItem ? '#BF2316' : '#232323' }}
				>
					<FontAwesomeIcon icon={faStar} className={styles.stars} />
				</div>
			))}
		</div>
	)
}

export default StarRating
