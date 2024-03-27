import { players } from './../content/playersContent'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { io } from 'socket.io-client'
import type { PlayerItem } from '@entities/Tab_Components/YourGameTab/index'

export const useConnectPlayer = () => {
	const [players, setPlayers] = useState<PlayerItem[]>([])

	const socket = io('https://showtime.up.railway.app', {
		path: '/sockets/',
		transports: ['polling', 'websocket'],
		reconnectionAttempts: 5,
		reconnectionDelay: 2000
	})

	const joinRoom = async (roomId: string, userId: any, player: any) => {
		try {
			console.log(`player ${userId} is joining ${roomId} room`)
			const response = await axios.post(
				`https://showtime.up.railway.app/api/rooms/${roomId}/users/${userId}/add`
				// `http://localhost:4000/api/rooms/${roomId}/users/${userId}/add`
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
		console.log('useConnectPlayer useEffect is working')

		socket.on('connect', () => {
			console.log('Connected to socket server in useConnectPlayerRoom	')
		})

		socket.on('roomUsersUpdated', (roomWithUsers) => {
			console.log('Updated room with users:', roomWithUsers)
			setPlayers(roomWithUsers.users || [])
		})

		socket.on('playerLeft', (playerId: string) => {
			setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== playerId))
		})

		return () => {
			socket.off('roomUsersUpdated')
			socket.off('playerJoined')
			socket.off('playerLeft')
			socket.disconnect()
		}
	}, [socket])

	return { players, joinRoom, leaveRoom }
}
