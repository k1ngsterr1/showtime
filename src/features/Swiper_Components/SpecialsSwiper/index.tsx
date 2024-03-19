import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '@entities/Card_Components/ProductsCard/index'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'

import photo from '@assets/About/shlyapa.webp'

import styles from './styles.module.scss'
import 'swiper/css'

export const specials = [
	{
		photo: photo,
		heading: 'Шляпа мафиози',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: '15000 тг'
	},
	{
		photo: photo,
		heading: 'Шляпа мафиози',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: '7000 тг'
	},
	{
		photo: photo,
		heading: 'Шляпа мафиози',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: '7000 тг'
	},
	{
		photo: photo,
		heading: 'Шляпа мафиози',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: '7000 тг'
	}
]

interface SwiperProductsProps {
	specials: Array<{
		photo: ImageMetadata
		heading: string
		paragraph: string
		price: string
	}>
}

type Swiper = any

const CardSwiper: React.FC<SwiperProductsProps> = ({ specials }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

	const { handlePrev, handleNext } = useCustomSwiper(swiperRef)

	return (
		<div className={styles.container}>
			<div className={styles.container__header}>
				<div className={styles.container__buttons}>
					<div className="flex w-[9%] items-center justify-between">
						<RevolverButton buttonType="gallery" direction="previous" onClick={handlePrev} />
						<div className="scale-x-[-1]">
							<RevolverButton buttonType="gallery" direction="next" onClick={handleNext} />
						</div>
					</div>
					<div className={styles.container__heading}>
						<h3 className="m-auto text-primary-red">Акции</h3>
					</div>
				</div>
			</div>
			<Swiper
				className="m-auto w-[86.6%]"
				slidesPerView={3}
				spaceBetween={64}
				onSwiper={(swiperInstance) => {
					swiperRef.current = swiperInstance
				}}
			>
				{specials.map((special, index) => (
					<SwiperSlide key={index}>
						<ProductCard
							photo={special.photo}
							heading={special.heading}
							paragraph={special.paragraph}
							price={special.price}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default CardSwiper
