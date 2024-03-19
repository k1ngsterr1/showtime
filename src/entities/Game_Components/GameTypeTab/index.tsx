import React from 'react'

import styles from './styles.module.scss'

interface IGameTypeTabProps {
	gameName: string
	isActive: boolean
	description: string
	onClick: () => void
}

export const GameTypeTab: React.FC<IGameTypeTabProps> = ({
	gameName,
	onClick,
	description,
	isActive
}) => {
	const tabStyle = isActive ? styles.activeTabStyle : styles.game_type_tab

	return (
		<button className={`${styles.game_type_tab} ${tabStyle}`} onClick={onClick}>
			<strong className={styles.game_type_tab__name}>{gameName}</strong>
			<p className={styles.game_type_tab__description}>{description}</p>
		</button>
	)
}
