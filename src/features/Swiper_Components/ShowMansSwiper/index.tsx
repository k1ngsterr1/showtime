import { Swiper, SwiperSlide } from 'swiper/react'
import { ShowMansCard } from '@entities/Card_Components/ShowMansCard/client'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'
import React, { useEffect, useState } from 'react'
import { useGetShowmans } from '@shared/lib/hooks/Admin/Get/useGetShowmans'
import 'swiper/css'
import styles from './styles.module.scss'

import ShowMan from '../../../assets/ShowMans/showman.webp'

interface ShowMansSwiperProps {
	showmans: Array<{
		photo: ImageMetadata
		name: string
		position: string
	}>
}

type Swiper = any

export const ShowMansSwiper: React.FC<ShowMansSwiperProps> = () => {
	const [showmans, setShowmans] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getShowmans } = useGetShowmans()
	const swiperRef = React.useRef<Swiper | null>(null)

	useEffect(() => {
		setIsLoading(true)
		getShowmans()
			.then((data) => {
				if (Array.isArray(data)) {
					setShowmans(data)
				} else {
					console.error('Data is not an array:', data)

					setShowmans([])
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
		<>
			<div className={styles.client}>
				{/* <div className={`${'mb-12 flex items-center justify-end'} ${styles.buttons}`}>
					<div className="m-auto w-full"></div>
					<div className="flex w-[10%] justify-between">
						<RevolverButton buttonType="gallery" direction="previous" onClick={handlePrev} />
						<div className="scale-x-[-1]">
							<RevolverButton buttonType="gallery" direction="next" onClick={handleNext} />
						</div>
					</div>
				</div> */}
				<Swiper
					slidesPerView={6}
					spaceBetween={64}
					className={styles.swiper}
					onSwiper={(swiperInstance) => {
						swiperRef.current = swiperInstance
					}}
				>
					{showmans.map((showman, index) => (
						<SwiperSlide key={index} className={styles.slide}>
							<ShowMansCard url={showman.url} name={showman.name} text={showman.text} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={styles.client_mob}>
				<Swiper
					className={styles.swiper_mob}
					slidesPerView={5}
					spaceBetween={64}
					onSwiper={(swiperInstance) => {
						swiperRef.current = swiperInstance
					}}
				>
					{showmans.map((showman, index) => (
						<SwiperSlide key={index}>
							<div className="flex">
								<ShowMansCard url={showman.url} name={showman.name} text={showman.text} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
