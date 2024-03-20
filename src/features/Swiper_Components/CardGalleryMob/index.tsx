import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, type ICardProps } from '@entities/Card_Components/Card'
import { SelectedBar } from '@shared/ui/SelectedBar'

import styles from './styles.module.scss'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

interface CardGalleryProps {
	cards: ICardProps[]
}

type Swiper = any

export const CardGalleryMob: React.FC<CardGalleryProps> = ({ cards }) => {
	const swiperRef = React.useRef<Swiper | null>(null)
	const [activeCardIndex, setActiveCardIndex] = React.useState(0);

	return (
		<div>
			<div className="mt-8">
				<Swiper
					className={styles.swiper}
					modules={[EffectCards]}
					effect={'cards'}
					onSwiper={(swiperInstance) => {
						swiperRef.current = swiperInstance;
					}}
					onSlideChange={(swiper) => {
						setActiveCardIndex(swiper.activeIndex);
					}}
				>
					{cards.map((card, index) => (
						<SwiperSlide key={index}>
							<div className="flex justify-center">
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
			</div>
			<div className="mt-8 flex flex-col items-center">
				<span className={styles.text_container__heading}>{cards[activeCardIndex].name}</span>
				<SelectedBar text="Тип игрока" />
				<p className={`${styles.text_container__paragraph} mt-6 w-[75%] text-center`}>
					{cards[activeCardIndex].paragraph}
				</p>
			</div>
		</div>
	)
}
