import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { LobbyTab } from '@entities/Tab_Components/LobbyTab'
import { YourGameTab } from '@entities/Tab_Components/YourGameTab'
import { players } from '@shared/lib/content/playersContent'
import { useGetRooms } from '@shared/lib/hooks/useGetRooms'
import { useCheckUserRoom } from '@shared/lib/hooks/useCheckUserRoom'

export const LobbiesBoard = () => {
	const rooms = useGetRooms()
	const userData = JSON.parse(localStorage.getItem('userData'))
	const { hasRoom, roomData } = useCheckUserRoom(userData.id)

	return (
		<section className={styles.lobbies}>
			<div className={styles.lobbies__upper_line}>
				<span className={styles.lobbies__upper_line__text}>Название игры</span>
				<span className={styles.lobbies__upper_line__text}>Тип</span>
				<span className={styles.lobbies__upper_line__text}>Кол-во игроков</span>
			</div>
			<div className={styles.lobbies__tabs}>
				{hasRoom && <YourGameTab gameName={roomData} />}
				{rooms
					.filter((room) => room.creatorId !== userData.id)
					.map((room) => (
						<LobbyTab
							key={room.id}
							name={room.roomName}
							type={room.gameType}
							quantity={room.currentPlayers}
						/>
					))}
			</div>
		</section>
	)
}
