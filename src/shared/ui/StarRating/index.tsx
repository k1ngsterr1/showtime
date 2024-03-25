import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons' // Import the star icon

import styles from './styles.module.scss'

export default function StarRating({}) {
	const stars = Array(5).fill(0)

	const [currentItem, setCurrentItem] = useState()

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
