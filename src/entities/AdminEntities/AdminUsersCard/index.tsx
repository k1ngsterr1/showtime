import React from 'react'
import styles from './styles.module.scss'

interface Props {
	photo: ImageMetadata
	name: string
}

const UsersCard: React.FC<Props> = ({ name, photo }) => {
	return (
		<div className={styles.card}>
			<img src={photo.src} alt={name} className={styles.card_picture} />
			<span className={styles.card__name}>{name}</span>
		</div>
	)
}

export default UsersCard
