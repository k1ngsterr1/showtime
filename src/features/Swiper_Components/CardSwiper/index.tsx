import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '@entities/Card_Components/ProductsCard/index'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'
import { products } from '@shared/lib/content/ShopContents'


import styles from './styles.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'

interface SwiperProductsProps {
	products: Array<{
		photo: ImageMetadata
		heading: string
		paragraph: string
		price: string
	}>
}

type Swiper = any

export const CardSwiper: React.FC<SwiperProductsProps> = ({ products }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

	const { handlePrev, handleNext } = useCustomSwiper(swiperRef)

	return (
		<div className={styles.container}>
			<div className={styles.container__header}>
				<div className="m-auto w-full">
					<h3 className="text-primary-red ">Онлайн магазин</h3>
				</div>
				<div className={styles.container__buttons}>
					<RevolverButton buttonType="gallery" direction="previous" onClick={handlePrev} />
					<div className="scale-x-[-1]">
						<RevolverButton buttonType="gallery" direction="next" onClick={handleNext} />
					</div>
				</div>
			</div>
			<Swiper
				className="ml-16 w-[200%]"
				slidesPerView={6}
				spaceBetween={64}
				onSwiper={(swiperInstance) => {
					swiperRef.current = swiperInstance
				}}
			>
				{products.map((product, index) => (
					<SwiperSlide key={index}>
						<ProductCard
							photo={product.photo}
							heading={product.heading}
							paragraph={product.paragraph}
							price={product.price}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
