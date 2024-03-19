import React from 'react'
import styles from './styles.module.scss'
import { PlayerAvatar } from '@entities/Game_Components/PlayerAvatar'

export interface PlayerItem {
	photo: ImageMetadata
	name: string
}

interface YourGameTabProps {
	players: PlayerItem[]
	gameType: string
	gameName: string
	capacity: number
}

export const YourGameTab: React.FC<YourGameTabProps> = ({
	players,
	gameType,
	gameName,
	capacity
}) => {
	const displayedPlayers = players.slice(0, 4)
	const additionalPlayersCount = players.length - displayedPlayers.length

	return (
		<div className={styles.game_tab}>
			<span className={styles.game_tab__text}>{gameName}</span>
			<span className={styles.game_tab__type}>{gameType}</span>
			<span className={styles.game_tab__text}>{capacity}</span>
			<hr className={styles.game_tab__separator} />
			<div className="mt-4 flex items-center gap-8">
				{displayedPlayers.map((player, index) => (
					<PlayerAvatar key={index} name={player.name} photo={player.photo} />
				))}
				{additionalPlayersCount > 0 && (
					<div className={`${styles.additional_players} hoverable`}>+{additionalPlayersCount}</div>
				)}
			</div>
		</div>
	)
}
