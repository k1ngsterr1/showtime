import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ReviewCard } from '@entities/Card_Components/ReviewCard/index'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'
import styles from './styles.module.scss'

import 'swiper/css'

interface SwiperReviewProps {
	reviews: Array<{
		time: string
		name: string
		paragraph: string
	}>
}

type Swiper = any

export const SwiperReview: React.FC<SwiperReviewProps> = ({ reviews }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

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
				className="contacts__con__swiper"
				slidesPerView={4}
				spaceBetween={40}
				onSwiper={(swiperInstance) => {
					swiperRef.current = swiperInstance
				}}
			>
				{reviews.map((review, index) => (
					<SwiperSlide key={index}>
						<div className="flex">
							<ReviewCard time={review.time} name={review.name} paragraph={review.paragraph} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SwiperReview
