import React, { useState } from 'react'
import Button from '@shared/ui/Buttons/DefaultReactButton'
import styles from './styles.module.scss'
import { SchedulePopup } from '@features/Popup_Components/SchedulePopup'

export type Props = {
	day: string
	place: string
	price: string
	time: string
}

const TimetableCard: React.FC<Props> = ({ day, place, price, time }) => {
	const [isPopupOpen, setPopupOpen] = useState(false)

	const handleClick = () => {
		setPopupOpen(true)
	}

	const handleClose = () => {
		setPopupOpen(false)
	}

	return (
		<div className={styles.timetable_card}>
			<span className={styles.timetable_card__day}>{day}</span>
			<hr className={styles.timetable_card__separator} />
			<span className={styles.timetable_card__place}>{place}</span>
			<div className={styles.timetable_card__circle}>
				<span className={styles.timetable_card__circle__price}>{price}</span>
			</div>
			<span className={styles.timetable_card__time}>{time}</span>
			<Button text="Записаться" buttonType="filled" margin="mt-9" onClick={handleClick} />
			{isPopupOpen && <SchedulePopup onClick={handleClose} />}
		</div>
	)
}

export default TimetableCard
