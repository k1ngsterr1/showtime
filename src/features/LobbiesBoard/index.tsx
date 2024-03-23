import { useEffect, useState } from 'react'
import { LobbyTab } from '@entities/Tab_Components/LobbyTab'
import { YourGameTab } from '@entities/Tab_Components/YourGameTab'
import { players } from '@shared/lib/content/playersContent'
import { useGetRooms } from '@shared/lib/hooks/useGetRooms'
import { useCheckUserRoom } from '@shared/lib/hooks/useCheckUserRoom'
import { createRoom } from '@shared/lib/hooks/useCreateGame'

import styles from './styles.module.scss'

export const LobbiesBoard = () => {
	const rooms = useGetRooms()
	const [userRoom, setUserRoom] = useState(null)
	const userData = JSON.parse(localStorage.getItem('userData'))
	const { roomData } = useCheckUserRoom(userData.id)

	useEffect(() => {
		const foundUserRoom = rooms.find((room) => room.creatorId === userData.id)
		console.log(foundUserRoom, 'zhopa')
		setUserRoom(foundUserRoom)
	}, [rooms, userData.id])

	return (
		<section className={styles.lobbies}>
			<div className={styles.lobbies__upper_line}>
				<span className={styles.lobbies__upper_line__text}>Название игры</span>
				<span className={styles.lobbies__upper_line__text}>Тип</span>
				<span className={styles.lobbies__upper_line__text}>Кол-во игроков</span>
			</div>
			<div className={styles.lobbies__tabs}>
				{userRoom && <YourGameTab gameName={userRoom.roomName} />}
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
