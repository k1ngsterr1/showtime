import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

export interface INearGameCard {
	date: string
	time: string
	place: string
	address: string
	mapHref: string
}

export const NearGameCard: React.FC<INearGameCard> = ({ date, time, place, address, mapHref }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__upper}>
				<span className={styles.card__upper__date}>{date}</span>
				<span className={styles.card__upper__time}>{time}</span>
			</div>
			<span className={styles.card__heading}>{place}</span>
			<address className={styles.card__address}>{address}</address>
			<div className="mt-4 flex items-center gap-2">
				<FontAwesomeIcon icon={faMapMarker} className={styles.card__icon} />
				<a className={styles.card__link} href={mapHref}>
					Показать на карте
				</a>
			</div>
		</div>
	)
}
