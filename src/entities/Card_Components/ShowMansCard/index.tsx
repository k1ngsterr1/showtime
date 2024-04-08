import React from 'react'
import styles from './styles.module.scss'

interface Props {
	showmanId: number
	image: ImageMetadata
	text: string
	name: string
}

const ShowMansCard: React.FC<Props> = ({ text, name, image, showmanId }) => {
	return (
		<div className={styles.card}>
			{showmanId}
			<img src={image.src} alt={name} className={styles.card_picture} />
			<span className={styles.card__name}>{name}</span>
			<span className={styles.card__position}>{text}</span>
		</div>
	)
}

export default ShowMansCard
