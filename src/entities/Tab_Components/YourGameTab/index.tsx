import React from 'react'
import styles from './styles.module.scss'
import { PlayerAvatar } from '@entities/Game_Components/PlayerAvatar'

export interface PlayerItem {
	photo: ImageMetadata
	name: string
	id: number
}

interface YourGameTabProps {
	gameName: string
	userId: string | number
	players: PlayerItem[]
}

export const YourGameTab: React.FC<YourGameTabProps> = ({ gameName, userId, players }) => {
	const displayedPlayers = players.slice(0, 5)
	const additionalPlayersCount = players.length - displayedPlayers.length

	return (
		<div className={styles.game_tab}>
			<div className="flex w-full items-center justify-between">
				<div className="flex flex-col items-start">
					<span className={styles.game_tab__text}>{gameName}</span>
					<span className={styles.game_tab__type}>Классическая</span>
				</div>
				<span className={styles.game_tab__text}> {players.length} / 11</span>
			</div>
			<hr className={styles.game_tab__separator} />
			<div className="mt-4 flex items-start gap-8">
				{displayedPlayers.map((player, index) => (
					<PlayerAvatar key={player.id} name={player.username} id={index} photo={''} />
				))}
				{additionalPlayersCount > 0 && (
					<div className={`${styles.additional_players} hoverable`}>+{additionalPlayersCount}</div>
				)}
			</div>
		</div>
	)
}
