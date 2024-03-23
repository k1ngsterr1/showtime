import React from 'react'
import styles from './styles.module.scss'
import Button from '@shared/ui/Buttons/DefaultReactButton/index'

interface ICardProps {
	number: string
	name: string
	paragraph: string
}

export const Card: React.FC<ICardProps> = ({ number, name, paragraph }) => {
	return (
		<>
			<div className={styles.card}>
				<h1 className={styles.card__number}>{number}</h1>
				<span className={styles.card__heading}>{name}</span>
				<p className={styles.card__paragraph}>{paragraph}</p>
				<Button buttonType="filled" text="Редактировать" margin="mt-8" />
			</div>
		</>
	)
}
