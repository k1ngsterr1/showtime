import React from 'react'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import AddButton from '@shared/ui/AddButton'
import Button from '@shared/ui/Buttons/DefaultReactButton/index'

import styles from './styles.module.scss'

interface Props {
	photo: ImageMetadata
	name: string
}

const UsersCard: React.FC<Props> = ({ name, photo }) => {
	return (
		<>
			<form>
				<ParagraphReact
					text="Подтвердите либо отклоните пользователя"
					paragraphType="white"
					margin="mb-12"
				/>
				<div className={styles.card}>
					<img src={photo.src} alt={name} className={styles.card_picture} />
					<span className={styles.card__name}>{name}</span>
				</div>
				<div className="mt-8 flex flex-row gap-10">
					<AddButton buttonType="filled" text="Подтвердить" type="submit" />
					<Button buttonType="users" text="Отклонить" />
				</div>
			</form>
		</>
	)
}

export default UsersCard
