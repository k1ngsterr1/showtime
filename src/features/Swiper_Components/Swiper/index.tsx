import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ReviewCard } from '@entities/Card_Components/ReviewCard/index'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useGetReviews } from '@shared/lib/hooks/Admin/Get/useGetReviews'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'
import styles from './styles.module.scss'

import 'swiper/css'

type Swiper = any

export const SwiperReview = () => {
	const swiperRef = React.useRef<Swiper | null>(null)
	const [reviews, setReviews] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getReviews } = useGetReviews()

	useEffect(() => {
		setIsLoading(true)
		getReviews()
			.then((data) => {
				if (Array.isArray(data)) {
					setReviews(data)
				} else {
					console.error('Data is not an array:', data)

					setReviews([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const { handlePrev, handleNext } = useCustomSwiper(swiperRef)

	return (
		<div>
			<div className={styles.reviews_screen}>
				<div className={styles.reviews_screen__upper}>
					<h3 className="text-primary-red ">Отзывы</h3>
				</div>
				<div className={styles.reviews_screen__buttons}>
					<RevolverButton buttonType="gallery" direction="previous" onClick={handlePrev} />
					<div className="scale-x-[-1]">
						<RevolverButton buttonType="gallery" direction="next" onClick={handleNext} />
					</div>
				</div>
			</div>
			<Swiper
				className={styles.swiper}
				slidesPerView={6}
				spaceBetween={38}
				onSwiper={(swiperInstance) => {
					swiperRef.current = swiperInstance
				}}
			>
				{reviews.map((review, index) => (
					<SwiperSlide key={index} className={styles.swiper__slide}>
						<div className="flex w-full">
							<ReviewCard
								date={review.date}
								text={review.text}
								name={review.name}
								rating={review.rating}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SwiperReview
