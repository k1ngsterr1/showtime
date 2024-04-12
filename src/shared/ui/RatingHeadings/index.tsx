import React from 'react'

import styles from './styles.module.scss'

export const RatingHeading = () => {
	return (
		<div className={styles.container}>
			<span className={styles.container__items}>№</span>
			<span className={styles.container__items2}>Id</span>
			<span className={styles.container__items2}>Имя</span>
			<span className={styles.container__items2}>Очки</span>
			<span className={styles.container__items2}>Коэфф.</span>
			<span className={styles.container__items2}>Трофеи</span>
			<span className={styles.container__items}>Игр</span>
			<span className={styles.container__items}>Победы</span>
			<span className={styles.container__items}>Поражений</span>
		</div>
	)
}
