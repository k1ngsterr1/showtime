import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NearGameCard, type INearGameCard } from '@entities/Game_Components/NearGameCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { useGetTimetables } from '@shared/lib/hooks/Admin/Get/useGetTimetables'

import 'swiper/css'
import 'swiper/css/navigation'

import styles from './styles.module.scss'

type Swiper = any

export const NearestGameSwiper = () => {
	const swiperRef = React.useRef<Swiper | null>(null)
	const [timetables, setTimetables] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getTimetables } = useGetTimetables()

	useEffect(() => {
		setIsLoading(true)
		getTimetables()
			.then((data) => {
				if (Array.isArray(data)) {
					setTimetables(data)
				} else {
					console.error('Data is not an array:', data)

					setTimetables([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={32}
				className={styles.swiper}
				onSwiper={(swiperInstance) => {
					swiperRef.current = swiperInstance
				}}
			>
				{timetables.map((card, index) => (
					<SwiperSlide key={index} className={styles.slide}>
						<NearGameCard
							date={card.date}
							time={card.time}
							place={card.place}
							address={card.address}
							name={card.name}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
