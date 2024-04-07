import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './styles.module.scss' // Убедитесь, что пути к стилям правильные

// Определение типов пропсов для StarRating
interface StarRatingProps {
	onRatingChange?: (rating: number) => void
}

// Компонент StarRating
export const StarRating: React.FC<StarRatingProps> = ({ onRatingChange }) => {
	const stars = Array(5).fill(0)
	const [currentItem, setCurrentItem] = useState<number | null>(null)

	const handleClick = (index: number) => {
		setCurrentItem(index)
		onRatingChange?.(index + 1)
	}

	return (
		<div className="star flex flex-row">
			{stars.map((_, index) => (
				<div
					className="flex flex-row"
					key={index}
					onClick={() => handleClick(index)}
					style={{ color: index <= currentItem ? '#BF2316' : '#232323' }}
				>
					<FontAwesomeIcon icon={faStar} className="stars text-2xl" />
				</div>
			))}
		</div>
	)
}
