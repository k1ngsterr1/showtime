import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import type { PlayerItem } from '@entities/Tab_Components/YourGameTab/index'

export const useConnectPlayer = () => {
	const [players, setPlayers] = useState<PlayerItem[]>([])

	useEffect(() => {
		const socket = io('http://localhost:4000', {
			path: '/sockets/'
		})

		socket.on('playerJoined', (player: PlayerItem) => {
			setPlayers((prevPlayers) => [...prevPlayers, player])
		})

		socket.on('playerLeft', (playerId: string) => {
			setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== playerId))
		})

		return () => {
			socket.disconnect()
		}
	}, [])

	return players
}
