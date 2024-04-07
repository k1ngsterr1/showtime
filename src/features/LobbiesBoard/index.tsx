import { useEffect, useState } from 'react'
import { LobbyTab } from '@entities/Tab_Components/LobbyTab'
import { YourGameTab } from '@entities/Tab_Components/YourGameTab'
import { useGetRooms } from '@shared/lib/hooks/useGetRooms'
import { useCheckUserRoom } from '@shared/lib/hooks/useCheckUserRoom'
import { useConnectPlayer } from '@shared/lib/hooks/useConnetPlayerRoom'
import { socket } from '@shared/lib/socket/socketService'
import { useStartGame } from '@shared/lib/hooks/useStartGame'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'

import styles from './styles.module.scss'

export const LobbiesBoard = () => {
	const userData = JSON.parse(localStorage.getItem('userData'))

	const { rooms, userRoom } = useGetRooms(userData.id)
	const stateId = userRoom === undefined ? localStorage.getItem('roomId') : userRoom.id

	const { joinRoom, players } = useConnectPlayer(userRoom?.id || stateId)
	const { startGame } = useStartGame()
	const [showStartGameButton, setShowStartGameButton] = useState(false)

	// Local Storage Items
	const storageRoomName = localStorage.getItem('roomName')
	const isInRoom = localStorage.getItem('inRoom')

	useEffect(() => {
		const shouldShowButton = userData.role === 'showman' && userRoom?.currentPlayers === 11
		const id = userRoom === undefined ? localStorage.getItem('roomId') : userRoom.id

		console.log(stateId)

		setShowStartGameButton(shouldShowButton)

		const handleGameStarting = () => {
			window.location.href = `/webroom/${id}`
			console.log('Тут стартует игра на сокетах')
		}

		socket.on('gameStarting', handleGameStarting)

		return () => {
			socket.off('gameStarting', handleGameStarting)
		}
	}, [userRoom, userData.role, socket])

	const handleStartGame = (roomId: any) => {
		startGame(roomId)
		socket.emit('startGame', { roomId })
		console.log('emitting startGame to the server')
	}

	return (
		<section className={styles.lobbies}>
			<div className={styles.lobbies__upper_line}>
				<span className={styles.lobbies__upper_line__text}>Название игры</span>
				<span className={styles.lobbies__upper_line__text}>Тип</span>
				<span className={styles.lobbies__upper_line__text}>Кол-во игроков</span>
			</div>
			<div className={styles.lobbies__tabs}>
				{isInRoom == 'true' && (
					<YourGameTab
						gameName={storageRoomName}
						key={'Проверка'}
						userId={userData.id}
						players={players}
					/>
				)}
				{userRoom && (
					<YourGameTab
						gameName={userRoom.roomName}
						key={userRoom.id}
						userId={userData.id}
						players={players}
					/>
				)}
				{showStartGameButton && (
					<ReactButton
						text="Запустить игру"
						buttonType="filled"
						margin="m-auto mt-4"
						onClick={() => handleStartGame(userRoom.id)}
					/>
				)}
				{rooms
					.filter((room) => room.creatorId !== userData.id && room.id != stateId)
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
