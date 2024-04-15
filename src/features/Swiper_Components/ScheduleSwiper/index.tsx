import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import TimetableCard from '@entities/Card_Components/TimetableCard'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'
import { cards } from '@shared/lib/content/cardContent'

import 'swiper/css'
import 'swiper/css/navigation'

import styles from './styles.module.scss'

type Swiper = any

interface IShowProps {
	cards: Props[]
	slides: number
}

export const TimeSwiper: React.FC<IShowProps> = ({ cards, slides }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

	const { handlePrev, handleNext } = useCustomSwiper(swiperRef)

	return (
		<>
			<div className={styles.client}>
				<div className={`${styles.buttons} flex w-[20%]`}>
					<div className="mb-8 flex w-[50%]">
						<RevolverButton buttonType="gallery" direction="previous" onClick={handlePrev} />
					</div>
					<div className="scale-x-[-1]">
						<RevolverButton buttonType="gallery" direction="next" onClick={handleNext} />
					</div>
				</div>
				<Swiper
					slidesPerView={slides}
					spaceBetween={100}
					className={styles.swiper}
					onSwiper={(swiperInstance) => {
						swiperRef.current = swiperInstance
					}}
					onSlideChange={(swiperInstance) => {
						// Disable swiping to the next slide if the active index is 3 or greater
						swiperInstance.allowSlideNext = swiperInstance.activeIndex < 3
					}}
				>
					{cards.map((card, index) => (
						<SwiperSlide key={index} className={styles.slide}>
							<TimetableCard
								day={card.day}
								place={card.place}
								price={card.price}
								time={card.time}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
