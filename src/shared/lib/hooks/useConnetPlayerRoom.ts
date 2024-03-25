import { useEffect, useState } from 'react'
import axios from 'axios'
import { io } from 'socket.io-client'
import type { PlayerItem } from '@entities/Tab_Components/YourGameTab/index'

export const useConnectPlayer = () => {
	const [players, setPlayers] = useState<PlayerItem[]>([])
	const socket = io('http://localhost:4000', { path: '/sockets/' })

	const joinRoom = async (roomId: string, userId: any) => {
		try {
			console.log(`player ${userId} is joining ${roomId} room`)
			const response = await axios.post(
				`https://showtime.up.railway.app/api/rooms/${roomId}/users/${userId}/add`
			)
			socket.emit('joinRoom', { roomId: roomId, userId: userId })
		} catch (error) {
			console.error('Error with connecting to the room')
		}
	}

	const leaveRoom = async (roomId: string, userId: any) => {
		try {
			await axios.post(`https://showtime.up.railway.app/api/rooms/${roomId}/users/${userId}/add`)
			socket.emit('leaveRoom', { roomId, userId })
		} catch (error) {
			console.error('Error with leaving the room')
		}
	}

	useEffect(() => {
		socket.on('joinRoom', (player: PlayerItem) => {
			console.log('newPlayer:', player)
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
