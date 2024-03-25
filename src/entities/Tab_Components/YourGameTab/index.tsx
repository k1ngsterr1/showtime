import React, { useState } from 'react'
import styles from './styles.module.scss'
import { PlayerAvatar } from '@entities/Game_Components/PlayerAvatar'
import { useConnectPlayer } from '@shared/lib/hooks/useConnetPlayerRoom'

export interface PlayerItem {
	photo: ImageMetadata
	name: string
	id: number
}

interface YourGameTabProps {
	// gameType: string
	gameName: string
	userId: string | number
	key: string
	players: any[]
	// capacity: number
}

export const YourGameTab: React.FC<YourGameTabProps> = ({ gameName, key, userId, players }) => {
	// const { players, joinRoom, leaveRoom } = useConnectPlayer()
	let currentPlayers = players.length
	const displayedPlayers = players.slice(0, 4)
	const additionalPlayersCount = players.length - displayedPlayers.length

	return (
		<div className={styles.game_tab}>
			<div className="flex w-full items-center justify-between">
				<div className="flex flex-col items-start">
					<span className={styles.game_tab__text}>{gameName}</span>
					<span className={styles.game_tab__type}>Классическая</span>
				</div>
				<span className={styles.game_tab__text}> {currentPlayers} / 11</span>
			</div>
			<hr className={styles.game_tab__separator} />
			<div className="mt-4 flex items-center gap-8">
				{players.map((player, index) => (
					<PlayerAvatar key={index} name={player.username} photo={''} />
				))}
				{additionalPlayersCount > 0 && (
					<div className={`${styles.additional_players} hoverable`}>+{additionalPlayersCount}</div>
				)}
			</div>
		</div>
	)
}
