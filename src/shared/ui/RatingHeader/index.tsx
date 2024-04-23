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
	loses
}) => {
	const ClassHeader = `${styles.marquee} ${margin ? margin : ''}`

	return (
		<div className={ClassHeader}>
			<div className={styles.container}>
				<span className={styles.container__number}>{number}</span>
				<span className={styles.container__none}>Id: {id}</span>
				<span className={styles.container__text}>{name}</span>
				<span className={styles.container__text}>Очки: {score}</span>
				<span className={styles.container__none}>Коэфф: {kfc}</span>
{/* <<<<<<< HEAD
				<div className={styles.container__wins}>
					<img src={icon} alt="cup" className={styles.container__cub} />
				</div>
=======
				{/* <div className={styles.container__wins}></div> */}
				<span className={styles.container__none}>Игр: {games}</span>
				<p className={styles.container__none}>Выигрышей: {wins}</p>
				<span className={styles.container__none}>Проигрышей: {loses}</span>
			</div>
		</div>
	)
}
