import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import TimetableCard, { type Props } from '@entities/Card_Components/TimetableCard'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'

import 'swiper/css'
import 'swiper/css/navigation'

import styles from './styles.module.scss'

type Swiper = any

interface IShowProps {
	cards: Props[]
}

export const TimeSwiper: React.FC<IShowProps> = ({ cards }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

	const { handlePrev, handleNext } = useCustomSwiper(swiperRef)

	return (
		<>
			<div className={styles.client}>
				<div className={`${styles.buttons}  flex items-center justify-end`}>
					<RevolverButton buttonType="gallery" direction="next" onClick={handleNext} />
					<div className="w-full"></div>
					<div className="flex w-[10%] scale-x-[-1] justify-end">
						<RevolverButton buttonType="gallery" direction="previous" onClick={handlePrev} />
					</div>
				</div>
				<Swiper
					slidesPerView={4}
					spaceBetween={32}
					className={styles.swiper}
					onSwiper={(swiperInstance) => {
						swiperRef.current = swiperInstance
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
