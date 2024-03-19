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
	const [activeCardIndex, setActiveCardIndex] = React.useState(0);



	return (
		<>
			<div className="mt-16">
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
						<span className={styles.text_container__heading}>{cards[activeCardIndex].name}</span>
						<SelectedBar text="Тип игрока" />
					</div>
					<p className={`${styles.text_container__paragraph} mt-4 w-[40%]`}>
						{cards[activeCardIndex].paragraph}
					</p>
				</div>
			</div>
		</>
	)
}
