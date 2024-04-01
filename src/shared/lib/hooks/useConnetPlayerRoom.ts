import { players } from './../content/playersContent'
import { useEffect, useState, useCallback } from 'react'
import { socket } from '../socket/socketService'
import axios from 'axios'
import type { PlayerItem } from '@entities/Tab_Components/YourGameTab/index'

export const useConnectPlayer = (userRoom: any) => {
	const [players, setPlayers] = useState<PlayerItem[]>(
		JSON.parse(localStorage.getItem('players') || '[]')
	)
	const [isInGameRoom, setIsInGameRoom] = useState(false)

	const updatePlayers = (newPlayers: PlayerItem[]) => {
		setPlayers(newPlayers)
		console.log('update players is working!', newPlayers)
		localStorage.setItem('players', JSON.stringify(newPlayers))
	}

	const joinRoom = async (roomId: string, userId: any, player: any) => {
		try {
			console.log(`player ${userId} is joining ${roomId} room`)
			const response = await axios.post(
				`https://showtime.up.railway.app/api/rooms/${roomId}/users/${userId}/add`
			)

			socket.emit('joinRoom', { roomId: roomId, userId: userId }, () => {
				console.log('joining room here')
			})
			setIsInGameRoom(true)
		} catch (error) {
			console.error('Error with connecting to the room')
		}
	}

	const leaveRoom = async (roomId: string, userId: any) => {
		try {
			await axios.post(`http://localhost:4000/api/rooms/${roomId}/users/${userId}/add`)
			socket.emit('leaveRoom', { roomId, userId })
			setIsInGameRoom(false)
		} catch (error) {
			console.error('Error with leaving the room')
		}
	}

	useEffect(() => {
		console.log('useConnectPlayer useEffect is working')

		if (userRoom == null) {
			console.log('userRoom is null')
			localStorage.removeItem('players')
		}

		socket.on('connect', () => {
			console.log('Connected to socket server in useConnectPlayerRoom')
		})

		socket.on('join', (roomWithUsers) => {
			console.log('Updated room with users after joining:', roomWithUsers.users)
			updatePlayers(roomWithUsers.users || [])
		})

		socket.on('roomUsersUpdated', (roomWithUsers) => {
			console.log('Updated room with users:', roomWithUsers.users)
			updatePlayers(roomWithUsers.users || [])
		})

		socket.on('playerLeft', (playerId: number | string) => {
			updatePlayers(players.filter((player) => player.id !== playerId))
		})

		return () => {
			socket.off('join')
			socket.off('roomUsersUpdated')
			socket.off('playerJoined')
			socket.off('playerLeft')
			socket.disconnect()
		}
	}, [socket])

	return { players, joinRoom, leaveRoom, isInGameRoom }
}
