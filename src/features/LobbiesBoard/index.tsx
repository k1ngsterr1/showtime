import { useEffect, useState } from 'react'
import { LobbyTab } from '@entities/Tab_Components/LobbyTab'
import { YourGameTab } from '@entities/Tab_Components/YourGameTab'
import { useGetRooms } from '@shared/lib/hooks/useGetRooms'
import { useCheckUserRoom } from '@shared/lib/hooks/useCheckUserRoom'
import { useConnectPlayer } from '@shared/lib/hooks/useConnetPlayerRoom'
import { socket } from '@shared/lib/socket/socketService'

import styles from './styles.module.scss'
import { players } from '@shared/lib/content/playersContent'

export const LobbiesBoard = () => {
	const userData = JSON.parse(localStorage.getItem('userData'))
	const { rooms, userRoom } = useGetRooms(userData.id)
	const { joinRoom, players } = useConnectPlayer(userRoom)
	// const { roomData } = useCheckUserRoom(userData.id)

	console.log('userRoom looks like this:', userRoom, 'rooms looks like this:', rooms)

	useEffect(() => {
		console.log('rooms in useEffect looks like this:', rooms)
	}, [rooms])

	return (
		<section className={styles.lobbies}>
			<div className={styles.lobbies__upper_line}>
				<span className={styles.lobbies__upper_line__text}>Название игры</span>
				<span className={styles.lobbies__upper_line__text}>Тип</span>
				<span className={styles.lobbies__upper_line__text}>Кол-во игроков</span>
			</div>
			<div className={styles.lobbies__tabs}>
				{userRoom && (
					<YourGameTab
						gameName={userRoom.roomName}
						key={userRoom.id}
						userId={userData.id}
						players={players}
					/>
				)}
				{rooms
					.filter((room) => room.creatorId !== userData.id)
					.map((room) => (
						<LobbyTab
							onClick={() => joinRoom(room.id, userData.id, userData)}
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
