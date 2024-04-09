import React from 'react'
import styles from './styles.module.scss'

interface Props {
	url: ImageMetadata
	text: string
	name: string
}

const ShowMansCard: React.FC<Props> = ({ text, name, url }) => {
	return (
		<div className={styles.card}>
			<img src={url} alt={name} className={styles.card_picture} />
			<span className={styles.card__name}>{name}</span>
			<span className={styles.card__position}>{text}</span>
		</div>
	)
}

export default ShowMansCard
