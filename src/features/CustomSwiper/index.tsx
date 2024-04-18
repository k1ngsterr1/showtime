import React, { useState, useRef, useEffect } from 'react'
import styles from './styles.module.scss'
import TimetableCard from '@entities/Card_Components/TimetableCard'

interface CardProps {
	day: string
	place: string
	price: string
	time: string
}

interface TimeSwiperProps {
	cards: CardProps[]
	slidesToShow: number
}

const TimeSwiper: React.FC<TimeSwiperProps> = ({ cards, slidesToShow }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const swiperRef = useRef<HTMLDivElement>(null)

	const handleSwipeStart = (event: React.TouchEvent) => {
		const touchDown = event.touches[0].clientX
		swiperRef.current!.setAttribute('data-touchDown', touchDown.toString())
	}

	const handleSwipeMove = (event: React.TouchEvent) => {
		const touchDown = parseFloat(swiperRef.current!.getAttribute('data-touchDown')!)
		const touchMove = event.touches[0].clientX
		const distance = touchMove - touchDown

		if (distance > 50 && currentIndex > 0) {
			setCurrentIndex(currentIndex - 1)
		} else if (distance < -50 && currentIndex < cards.length - slidesToShow) {
			setCurrentIndex(currentIndex + 1)
		}
	}

	useEffect(() => {
		const swiperElement = swiperRef.current
		swiperElement!.style.transition = 'transform 0.3s ease-out'
		swiperElement!.style.transform = `translateX(-${currentIndex * (100 / slidesToShow)}%)`
	}, [currentIndex, slidesToShow])

	return (
		<div className={styles.swiperContainer}>
			<div
				ref={swiperRef}
				className={styles.swiper}
				onTouchStart={handleSwipeStart}
				onTouchMove={handleSwipeMove}
			>
				{cards.map((card, index) => (
					<div key={index} className={styles.swipeItem} style={{ width: `${100 / slidesToShow}%` }}>
						<TimetableCard {...card} />
					</div>
				))}
			</div>
		</div>
	)
}

export default TimeSwiper
