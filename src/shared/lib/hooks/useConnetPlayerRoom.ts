import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import type { PlayerItem } from '@entities/Tab_Components/YourGameTab/index'

export const useConnectPlayer = () => {
	const [players, setPlayers] = useState<PlayerItem[]>([])
	const socket = io('http://localhost:4000', { path: '/sockets/' })

	const joinRoom = (roomId: string, player: any) => {
		socket.emit('joinRoom', { roomId, player })
	}

	const leaveRoom = (roomId: string, playerId: string) => {
		socket.emit('leaveRoom', { roomId, playerId })
	}

	useEffect(() => {
		socket.on('playerJoined', (player: PlayerItem) => {
			setPlayers((prevPlayers) => [...prevPlayers, player])
		})

		socket.on('playerLeft', (playerId: string) => {
			setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== playerId))
		})

		return () => {
			socket.off('playerJoined')
			socket.off('playerLeft')
			socket.disconnect()
		}
	}, [])

	return { players, joinRoom, leaveRoom }
}
