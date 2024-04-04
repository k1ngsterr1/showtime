import React from 'react'

import styles from './styles.module.scss'

interface RatingHeaderProps {
	name: string
	margin: string
	icon: any
	wins: string
	kfc: string
	number: string
	games: string
}

export const RatingHeader: React.FC<RatingHeaderProps> = ({
	name,
	margin,
	icon,
	wins,
	kfc,
	number,
	games
}) => {
	const ClassHeader = `${styles.marquee} ${margin ? margin : ''}`

	return (
		<div className={ClassHeader}>
			<div className={styles.container}>
				<p className={styles.container__text}>{name}</p>
				<div className={styles.container__wins}>
					<img src={icon} alt="cup" className={styles.container__cub} />
					<p>Победы: {wins}</p>
				</div>
				<span className={styles.container__none}>Игр: {games}</span>
				<span className={styles.container__none}>Коэфф. побед: {kfc}</span>
				<span className={styles.container__number}>{number}</span>
			</div>
		</div>
	)
}
