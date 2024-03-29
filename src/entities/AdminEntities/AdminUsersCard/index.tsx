import React from 'react'
import ParagraphReact from '@shared/ui/ParagraphReact/index'

import styles from './styles.module.scss'

interface Props {
	photo: ImageMetadata
	name: string
}

const UsersCard: React.FC<Props> = ({ name, photo }) => {
	return (
		<>
			<ParagraphReact
				text="Подтвердите либо отклоните пользователя"
				paragraphType="white"
				margin="mb-12"
			/>
			<div className={styles.card}>
				<img src={photo.src} alt={name} className={styles.card_picture} />
				<span className={styles.card__name}>{name}</span>
			</div>
		</>
	)
}

export default UsersCard
