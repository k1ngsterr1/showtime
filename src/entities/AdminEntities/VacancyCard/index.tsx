import React from 'react'
import { LinkButton } from '@shared/ui/LinkButton'

import styles from '../ServicesCard/styles.module.scss'

export interface ICardProps {
	number: number
	position: string
	text: string
}

const VacancyCard: React.FC<ICardProps> = ({ number, position, text }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__number}>{number}</div>
			<span className={styles.card__heading}>{position}</span>
			<p className={styles.card__paragraph}>{text}</p>
			<LinkButton buttonType="filled" text="Откликнуться" margin="mt-8" href="vacancie-form" />
		</div>
	)
}

export default VacancyCard
