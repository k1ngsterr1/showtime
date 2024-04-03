import React from 'react'
import s from './s.module.scss'

interface Props {
	margin?: string
	photos: any[]
}

// ! Добавил больше items
const MobMarquees: React.FC<Props> = ({ margin, photos }) => {
	const MarqueeClass = `${s.marquee} ${margin ? margin : ''}`

	return (
		<div className={MarqueeClass}>
			{photos.map((photo: ImageMetadata, index: number) => (
				<div className={s.item} key={index}>
					<img src={photo.src} className={s.item__image} alt={`Slide ${index + 1}`} />
				</div>
			))}
		</div>
	)
}

export default MobMarquees
