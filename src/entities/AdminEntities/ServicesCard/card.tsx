import React from 'react'
import { LinkButton } from '@shared/ui/LinkButton'

import styles from './styles.module.scss'

export interface ICardProps {
	number: string
	service: string
	text: string
}

const Card: React.FC<ICardProps> = ({ number, service, text }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__number}>{number}</div>
			<span className={styles.card__heading}>{service}</span>
			<p className={styles.card__paragraph}>{text}</p>
			<LinkButton buttonType="filled" text="Откликнуться" margin="mt-8" href="vacancie-form" />
		</div>
	)
}

export default Card
