import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import styles from './styles.module.scss'

type Swiper = any

interface IGalleryProps {
	photos: any[]
}

export const GalleryCustom: React.FC<IGalleryProps> = ({ photos }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

	const { handlePrev } = useCustomSwiper(swiperRef)

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.galslery_nav}>
					<RevolverButton buttonType="gallery" direction="left" onClick={handlePrev} />
				</div>
			</div>
			<Swiper
				className={styles.swiper}
				modules={[Navigation]}
				loop
				spaceBetween={50}
				slidesPerView={1}
				navigation={false}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper: any) => {
					swiperRef.current = swiper
				}}
			>
				{photos.map((photo: ImageMetadata, index: number) => (
					<SwiperSlide key={index}>
						<img src={photo.src} alt={`Slide ${index + 1}`} className={styles.photo} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
