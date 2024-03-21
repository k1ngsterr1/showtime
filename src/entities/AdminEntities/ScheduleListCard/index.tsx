import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'

export interface IScheduleListCard {
	date: string
	time: string
	place: string
	address: string
	mapHref: string
}

export const ScheduleListCard: React.FC<IScheduleListCard> = ({ date, time, place, address }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__upper}>
				<span className={styles.card__upper__date}>{date}</span>
				<span className={styles.card__upper__time}>{time}</span>
			</div>
			<span className={styles.card__heading}>{place}</span>
			<address className={styles.card__address}>{address}</address>
			<div className="mt-20 flex items-center overflow-hidden text-2xl">
				<FontAwesomeIcon icon={faLocationDot} className={styles.card__icon} />
				<a className={styles.card__link}>Укажите место на карте</a>
			</div>
		</div>
	)
}
