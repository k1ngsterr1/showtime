import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import HistoryCard from '@entities/Card_Components/HistoryCard/index'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { history } from '@shared/lib/content/historyContent'

import 'swiper/css'
import styles from './styles.module.scss'

interface SwiperHistoryProps {
	history: Array<{
		data: string
		name: string
		paragraph: string
	}>
}

type Swiper = any

export const SwiperHistory: React.FC<SwiperHistoryProps> = () => {
	const swiperRef = React.useRef<Swiper | null>(null)

	const handlePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev()
		}
	}

	const handleNext = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext()
		}
	}

	return (
		<div>
			<div className={`${'mb-12 flex items-center justify-end'} ${styles.buttons}`}>
				<div className="flex w-[10%] justify-between">
					<RevolverButton buttonType="gallery" direction="previous" onClick={handlePrev} />
					<div className="scale-x-[-1]">
						<RevolverButton buttonType="gallery" direction="next" onClick={handleNext} />
					</div>
				</div>
			</div>
			<Swiper
				className={styles.swiper}
				slidesPerView={6}
				spaceBetween={64}
				onSwiper={(swiperInstance) => {
					swiperRef.current = swiperInstance
				}}
			>
				{history.map((history, index) => (
					<SwiperSlide key={index}>
						<div className="flex">
							<HistoryCard name={history.name} data={history.data} paragraph={history.paragraph} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SwiperHistory
