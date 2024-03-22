import React from 'react'
import Button from '@shared/ui/Buttons/DefaultReactButton'
import styles from './styles.module.scss'

export type Props = {
	day: string
	place: string
	price: string
	time: string
}

const TimetableCard: React.FC<Props> = ({ day, place, price, time }) => {
	return (
		<div className={styles.timetable_card}>
			<span className={styles.timetable_card__day}>{day}</span>
			<hr className={styles.timetable_card__separator} />
			<span className={styles.timetable_card__place}>{place}</span>
			<div className={styles.timetable_card__circle}>
				<span className={styles.timetable_card__circle__price}>{price}</span>
			</div>
			<span className={styles.timetable_card__time}>{time}</span>
			<Button text="Записаться" buttonType="filled" margin="mt-9" />
		</div>
	)
}

export default TimetableCard
