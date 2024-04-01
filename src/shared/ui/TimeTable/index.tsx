import React from 'react'
import styles from './styles.module.scss'

interface ITimeTable {
	time: string
}

export const TimeTable: React.FC<ITimeTable> = ({ time }) => {
	return (
		<div className={styles.time_table}>
			<span className={styles.time_table__text}>Сейчас:</span>
			<span className={styles.time_table__time}>{time}</span>
		</div>
	)
}
