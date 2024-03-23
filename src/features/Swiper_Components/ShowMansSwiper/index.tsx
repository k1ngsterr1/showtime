import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ShowMansCard from '@entities/Card_Components/ShowMansCard/index'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'

import 'swiper/css'
import styles from './styles.module.scss'

import ShowMan from '../../../assets/ShowMans/showman.webp'

export const showmans = [
	{
		photo: ShowMan,
		name: 'Ruslan Pricol',
		position: 'Обычный Смертный'
	},
	{
		photo: ShowMan,
		name: 'Gaidar Lord',
		position: 'Хороший Ведущий'
	},
	{
		photo: ShowMan,
		name: 'Artyom Andre',
		position: 'Мафия Алматы'
	},
	{
		photo: ShowMan,
		name: 'Zain Ihsan',
		position: 'Грязнокровка'
	},
	{
		photo: ShowMan,
		name: 'Erlan Erlanov',
		position: 'Сотрудник'
	},
	{
		photo: ShowMan,
		name: 'Nurmukhamed Pofamet',
		position: 'Сотрудник'
	},
	{
		photo: ShowMan,
		name: 'Aslanchik',
		position: 'Сотрудник'
	},
	{
		photo: ShowMan,
		name: 'Dauren Pidor',
		position: 'Сотрудник'
	}
]

interface ShowMansSwiperProps {
	showmans: Array<{
		photo: ImageMetadata
		name: string
		position: string
	}>
}

type Swiper = any

export const ShowMansSwiper: React.FC<ShowMansSwiperProps> = ({ showmans }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

	const { handlePrev, handleNext } = useCustomSwiper(swiperRef)

	return (
		<>
			<div className={styles.client}>
				<div className={`${'mb-12 flex items-center justify-end'} ${styles.buttons}`}>
					<div className="m-auto w-full"></div>
					<div className="flex w-[10%] justify-between">
						<RevolverButton buttonType="gallery" direction="previous" onClick={handlePrev} />
						<div className="scale-x-[-1]">
							<RevolverButton buttonType="gallery" direction="next" onClick={handleNext} />
						</div>
					</div>
				</div>
				<Swiper
					className="contacts__con__swiper"
					slidesPerView={4}
					spaceBetween={4}
					onSwiper={(swiperInstance) => {
						swiperRef.current = swiperInstance
					}}
				>
					{showmans.map((showman, index) => (
						<SwiperSlide key={index}>
							<div className="flex">
								<ShowMansCard
									photo={showman.photo}
									name={showman.name}
									position={showman.position}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={styles.client_mob}>
				<Swiper
					className="contacts__con__swiper"
					slidesPerView={1}
					spaceBetween={4}
					onSwiper={(swiperInstance) => {
						swiperRef.current = swiperInstance
					}}
				>
					{showmans.map((showman, index) => (
						<SwiperSlide key={index}>
							<div className="flex">
								<ShowMansCard
									photo={showman.photo}
									name={showman.name}
									position={showman.position}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
