import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '@entities/Card_Components/ProductsCard/index'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'
import { useState } from 'react'
import { useEffect } from 'react'
import { useGetProducts } from '@shared/lib/hooks/Admin/Get/useGetProductsClient'

import styles from './styles.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'

type Swiper = any

export const CardSwiper = () => {
	const swiperRef = React.useRef<Swiper | null>(null)
	const [products, setProducts] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getProducts } = useGetProducts()

	useEffect(() => {
		setIsLoading(true)
		getProducts()
			.then((data) => {
				if (Array.isArray(data)) {
					setProducts(data)
				} else {
					console.error('Data is not an array:', data)

					setProducts([])
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
							url={product.url}
							name={product.name}
							description={product.description}
							price={product.price}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
