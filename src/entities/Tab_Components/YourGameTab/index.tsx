import React from 'react'
import styles from './styles.module.scss'
import { PlayerAvatar } from '@entities/Game_Components/PlayerAvatar'
import { useConnectPlayer } from '@shared/lib/hooks/useConnetPlayerRoom'

export interface PlayerItem {
	photo: ImageMetadata
	name: string
	id: number
}

interface YourGameTabProps {
	gameType: string
	gameName: string
	capacity: number
}

export const YourGameTab: React.FC<YourGameTabProps> = ({ gameType, gameName, capacity }) => {
	const players = useConnectPlayer()
	const displayedPlayers = players.slice(0, 4)
	const additionalPlayersCount = players.length - displayedPlayers.length

	return (
		<div className={styles.game_tab}>
			<span className={styles.game_tab__text}>{gameName}</span>
			<span className={styles.game_tab__type}>{gameType}</span>
			<span className={styles.game_tab__text}>{capacity}</span>
			<hr className={styles.game_tab__separator} />
			<div className="mt-4 flex items-center gap-8">
				{players.map((player, index) => (
					<PlayerAvatar key={index} name={player.name} photo={player.photo} />
				))}
				{additionalPlayersCount > 0 && (
					<div className={`${styles.additional_players} hoverable`}>+{additionalPlayersCount}</div>
				)}
			</div>
		</div>
	)
}
