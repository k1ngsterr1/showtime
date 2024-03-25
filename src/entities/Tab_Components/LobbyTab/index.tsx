import React from 'react'

import styles from './styles.module.scss'

interface ILobbyTabProps {
	name: string
	type: string
	quantity: string
	onClick: () => void
}

export const LobbyTab: React.FC<ILobbyTabProps> = ({ name, type, quantity, onClick }) => {
	return (
		<div className={styles.lobby_tab} onClick={onClick}>
			<span className={styles.lobby_tab__text}>{name}</span>
			<span className={styles.lobby_tab__text}>{type}</span>
			<span className={styles.lobby_tab__text}>{quantity}</span>
		</div>
	)
}
