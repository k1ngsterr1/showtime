import React from 'react'
import styles from './styles.module.scss'

interface Props {
	margin?: string
	photos: any[]
}

const MobMarquees: React.FC<Props> = ({ margin, photos }) => {
	const MarqueeClass = `${styles.marquee} ${margin ? margin : ''}`

	return (
		<div className={MarqueeClass}>
			{photos.map((photo: ImageMetadata, index: number) => (
				<div className={styles.item} key={index}>
					<img src={photo.src} alt={`Slide ${index + 1}`} />
				</div>
			))}
		</div>
	)
}

export default MobMarquees
