import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, type ICardProps } from '@entities/Card_Components/Card'
import { EffectCards } from 'swiper/modules'
import { SelectedBar } from '@shared/ui/SelectedBar'
import Paragraph from '@shared/ui/ParagraphReact'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'
import styles from '@features/Swiper_Components/CardGallery/styles.module.scss'

type Swiper = any

interface IFormContentProps {
	rulesType: string
	cards: ICardProps[]
}

export const RulesContent: React.FC<IFormContentProps> = ({ rulesType, cards }) => {
	const swiperRef = React.useRef<Swiper | null>(null)
	const [activeCardIndex, setActiveCardIndex] = React.useState(0)

	const renderContent = () => {
		switch (rulesType) {
			case 'rules':
				return (
					<div>
						<Paragraph text="dfgimdfugsdo[fgmsdfiogsdfgjsdofg" paragraphType={'white'} />
					</div>
				)
			// case 'roles':
			// 	return (
			// 		<div>
			// 			<div className="mt-16">
			// 				<Swiper
			// 					className={styles.swiper}
			// 					modules={[EffectCards]}
			// 					effect={'cards'}
			// 					onSwiper={(swiperInstance) => {
			// 						swiperRef.current = swiperInstance
			// 					}}
			// 					onSlideChange={(swiper) => {
			// 						setActiveCardIndex(swiper.activeIndex)
			// 					}}
			// 				>
			// 					{cards.map((card, index) => (
			// 						<SwiperSlide key={index} className="overflow-hidden">
			// 							<div className="flex items-center justify-center">
			// 								<Card
			// 									name={card.name}
			// 									paragraph={card.paragraph}
			// 									iconType={card.iconType.src}
			// 									icon={card.icon.src}
			// 								/>
			// 							</div>
			// 						</SwiperSlide>
			// 					))}
			// 				</Swiper>
			// 				<div className={styles.text_container}>
			// 					<div className="flex items-center gap-8">
			// 						<span className={styles.text_container__heading}>
			// 							{cards[activeCardIndex].name}
			// 						</span>
			// 						<SelectedBar text="Тип игрока" />
			// 					</div>
			// 					<p className={`${styles.text_container__paragraph} mt-4 w-[40%]`}>
			// 						{cards[activeCardIndex].paragraph}
			// 					</p>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	)
			case 'cardmob':
				return <div></div>
			case 'rulesmob':
				return (
					<div className="mt-12">
						<Paragraph
							width="80%"
							margin="m-auto"
							align="text-center"
							text="Игра Мафия включает в себя две основные фазы: ночную и дневную.

Ночная фаза:

Мафиози просыпаются и выбирают одного из игроков, которого они хотят убить.
Затем все спят, и специальные роли (если они есть в игре) выполняют свои действия.
Дневная фаза:

Игроки просыпаются, и ведущий объявляет, кто был убит мафией.
Затем все игроки обсуждают, кто мог быть мафией, и голосуют, кого они хотят повесить.
Игрок с наибольшим количеством голосов уходит из игры."
							paragraphType={'white'}
						/>
					</div>
				)
			default:
				return (
					<>
						<div className="mt-8">
							<Swiper
								className={styles.swiper}
								modules={[EffectCards]}
								effect={'cards'}
								onSwiper={(swiperInstance) => {
									swiperRef.current = swiperInstance
								}}
								onSlideChange={(swiper) => {
									setActiveCardIndex(swiper.activeIndex)
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
									<span className={styles.text_container__heading}>
										{cards[activeCardIndex].name}
									</span>
									<SelectedBar text="Тип игрока" />
								</div>
								<p className={`${styles.text_container__paragraph} mt-4 w-[40%]`}>
									{cards[activeCardIndex].paragraph}
								</p>
							</div>
						</div>
						<div className="mt-8 flex flex-col">
							<Swiper
								className={styles.swiper_mob}
								modules={[EffectCards]}
								effect={'cards'}
								onSwiper={(swiperInstance) => {
									swiperRef.current = swiperInstance
								}}
								onSlideChange={(swiper) => {
									setActiveCardIndex(swiper.activeIndex)
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
							<div className={styles.text_container_mob}>
								<div className="mt-8 flex flex-col items-center">
									<span className={styles.text_container_mob__heading}>
										{cards[activeCardIndex].name}
									</span>
									<SelectedBar text="Тип игрока" />
									<p className={`${styles.text_container_mob__paragraph} mt-6 w-[75%] text-center`}>
										{cards[activeCardIndex].paragraph}
									</p>
								</div>
							</div>
						</div>
					</>
				)
		}
	}
	return <>{renderContent()}</>
}
