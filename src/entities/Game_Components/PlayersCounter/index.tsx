import { useState } from 'react'

import styles from '@entities/Game_Components/GameContent/styles.module.scss'

export const PlayersCounter = () => {
	const [playerCount, setPlayerCount] = useState(8)

	const handleIncrement = () => {
		setPlayerCount((prevCount) => (prevCount < 16 ? prevCount + 1 : prevCount))
	}

	const handleDecrement = () => {
		setPlayerCount((prevCount) => (prevCount > 8 ? prevCount - 1 : prevCount))
	}

	return (
		<div className="flex flex-col items-center">
			<div className={styles.urban_content__counter}>
				<button
					onClick={handleIncrement}
					className={`${styles.urban_content__counter__increment} hoverable`}
				>
					+
				</button>
				<input
					className={styles.urban_content__counter__input}
					value={playerCount}
					onChange={(e) => setPlayerCount(Number(e.target.value))}
					type="number"
					max="16"
					min="8"
				/>
				<button
					onClick={handleDecrement}
					className={`${styles.urban_content__counter__decrement} hoverable`}
				>
					-
				</button>
			</div>
			<span className="mt-1 font-neoregular text-sm text-primary-dark">от 8 до 16 человек</span>
		</div>
	)
}
