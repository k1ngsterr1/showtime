import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, type ICardProps } from '@entities/Card_Components/Card'
import { EffectCards } from 'swiper/modules'
import { SelectedBar } from '@shared/ui/SelectedBar'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'

import styles from './styles.module.scss'

type Swiper = any

interface ICardGalleryProps {
	cards: ICardProps[]
}

export const CardGallery: React.FC<ICardGalleryProps> = ({ cards }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

	return (
		<>
			<Swiper
				className={styles.swiper}
				modules={[EffectCards]}
				effect={'cards'}
				onSwiper={(swiperInstance) => {
					swiperRef.current = swiperInstance
				}}
			>
				{cards.map((card, index) => (
					<SwiperSlide key={index} className="overflow-hidden">
						<div className="flex items-center justify-center">
							<Card
								name={card.name}
								paragraph={card.paragraph}
								iconType={card.iconType.src}
								icon={card.icon.src}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.text_container}>
				<div className="flex items-center gap-8">
					<span className={styles.text_container__heading}>Заголовок</span>
					<SelectedBar text="Тип игрока" />
				</div>
				<p className={`${styles.text_container__paragraph} mt-4 w-[40%]`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. <br /> <br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
			</div>
		</>
	)
}
