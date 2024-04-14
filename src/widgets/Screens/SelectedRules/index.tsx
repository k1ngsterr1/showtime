import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, type ICardProps } from '@entities/Card_Components/Card'
import { EffectCards } from 'swiper/modules'
import { SelectedBar } from '@shared/ui/SelectedBar'
import Paragraph from '@shared/ui/ParagraphReact'
import ParagraphReact from '@shared/ui/ParagraphReact/index'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'
import styles from '@features/Swiper_Components/CardGallery/styles.module.scss'
import styles2 from './styles.module.scss'

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
					<div className="flex flex-col">
						<Paragraph
							width="42%"
							margin="mr-auto"
							align="text-left"
							text="Игрa Мафия погружает участников в интригующий мир, где каждый вечер может стать последним для одного из жителей города. Взаимодействие между игроками, стратегическое мышление и умение убеждать остальных в своей правоте или невиновности становятся ключевыми для победы. Давайте более подробно рассмотрим ночные и дневные фазы игры."
							paragraphType={'white'}
						/>
						<span className={styles2.span}>Ночная фаза: Мафия просыпается</span>
						<Paragraph
							width="42%"
							margin="ml-auto"
							align="text-right"
							text="Ведущий тихо просит мафию открыть глаза и выбрать жертву. Мафиози молча договариваются, указывая жестами на того, кого они хотят устранить этой ночью. Важно, чтобы они действовали слаженно и не выдавали себя звуками или резкими движениями.
							После выбора жертвы мафия закрывает глаза."
							paragraphType={'white'}
						/>
						<span className={styles2.span__special_roles}>
							Ночная фаза: Действия специальных ролей
						</span>
						<Paragraph
							width="42%"
							margin="mr-auto"
							align="text-left"
							text="Доктор может выбрать одного игрока для лечения этой ночью, возможно даже себя. Если доктор выбрал того же игрока, что и мафия, его действие отменяет убийство.
							Детектив имеет право проверить любого игрока на принадлежность к мафии. Ведущий кивком или жестом сообщает детективу, мафия ли его выбор.
							Другие специальные роли, такие как путана, террорист, маньяк и т.д., выполняют свои действия согласно правилам."
							paragraphType={'white'}
						/>
						<span className={styles2.span}>Дневная Фаза: Объявление результатов ночи</span>
						<Paragraph
							width="42%"
							margin="ml-auto"
							align="text-right"
							text="Ведущий сообщает, кто был убит этой ночью, или объявляет, что никто не погиб, если действия специальных ролей предотвратили убийство.
						Обсуждение:

Все игроки обсуждают события прошлой ночи и пытаются выявить мафию. Обвинения, доказательства, предположения и личные впечатления играют важную роль в этом процессе.
Голосование:

После обсуждения проводится открытое голосование за то, кого игроки считают мафией. Каждый игрок голосует за того, кого хочет повесить. Игрок, набравший наибольшее количество голосов, объявляется повешенным и выбывает из игры. Его роль обычно разглашается."
							paragraphType={'white'}
						/>
					</div>
				)
			case 'rulesMob':
				return (
					<div className="flex flex-col">
						<Paragraph
							width="75%"
							margin="m-auto"
							align="text-center pt-8"
							text="Игра Мафия погружает участников в интригующий мир, где каждый вечер может стать последним для одного из жителей города. Взаимодействие между игроками, стратегическое мышление и умение убеждать остальных в своей правоте или невиновности становятся ключевыми для победы. Давайте более подробно рассмотрим ночные и дневные фазы игры."
							paragraphType={'white'}
						/>
					</div>
				)
			default:
				return (
					<>
						<div className="mt-8 max-[640px]:hidden ">
							<div className={styles2.span__paragraph}>
								<ParagraphReact
									paragraphType="white"
									width="20%"
									margin="mb-6"
									text="Игра Мафия — это захватывающая ролевая игра, погружающая игроков в мир интриг, обмана и психологической борьбы."
								/>
							</div>
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
						<div className="flex flex-col">
							<div className={styles2.paragraph_mob}>
								<ParagraphReact
									paragraphType="white"
									width="75%"
									margin="m-auto pb-8"
									align="text-center"
								/>
							</div>
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
