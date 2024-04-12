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
	id: string
	score: string
	trophy: string
	loses: string
}

export const RatingHeader: React.FC<RatingHeaderProps> = ({
	name,
	margin,
	icon,
	wins,
	kfc,
	number,
	games,
	id,
	score,
	trophy,
	loses
}) => {
	const ClassHeader = `${styles.marquee} ${margin ? margin : ''}`

	return (
		<div className={ClassHeader}>
			<div className={styles.container}>
				<span className={styles.container__number}>{number}</span>
				<span className={styles.container__text}>{id}</span>
				<span className={styles.container__text}>{name}</span>
				<span className={styles.container__text}>{score}</span>
				<span className={styles.container__none}>{kfc}</span>
				<div className={styles.container__wins}>
					<img src={icon} alt="cup" className={styles.container__cub} />
					<span className={styles.container__text}>{trophy}</span>
				</div>
				<span className={styles.container__none}>{games}</span>
				<p>{wins}</p>
				<span className={styles.container__none}>{loses}</span>
			</div>
		</div>
	)
}
