import { useEffect, useState, useCallback } from 'react'
import { socket } from '../socket/socketService'
import type { PlayerItem } from '@entities/Tab_Components/YourGameTab/index'
import Cookies from 'js-cookie'
import axios from 'axios'

export const useConnectPlayer = (roomId?: any) => {
	const [generalRoomId, setGeneralRoomId] = useState<any>()
	const [players, setPlayers] = useState<PlayerItem[]>(
		JSON.parse(localStorage.getItem('players') || '[]')
	)

	const getPlayers = useCallback(async () => {
		if (!roomId) return

		try {
			const response = await axios.get(`https://showtime.up.railway.app/api/rooms/${roomId}/users`)
			setPlayers(response.data.users)
		} catch (error) {
			console.error('There was an error fetching players!')
		}
	}, [roomId])

	useEffect(() => {
		getPlayers()
	}, [getPlayers])

	const joinRoom = async (roomId: string, userId: any, player: any) => {
		try {
			const response = await axios.post(
				`https://showtime.up.railway.app/api/rooms/${roomId}/users/${userId}/add`
			)

			socket.emit('joinRoom', { roomId: roomId, userId: userId }, () => {
				console.log('joining room here')
			})

			Cookies.set('roomId', JSON.stringify(roomId))
			localStorage.setItem('roomId', roomId)
			localStorage.setItem('roomName', response.data.room.roomName)
			localStorage.setItem('inRoom', 'true')
		} catch (error) {
			console.error('Error with connecting to the room')
		}
	}

	const leaveRoom = async (roomId: string | number, userId: any) => {
		try {
			await axios.post(`https://showtime.up.railway.app/api/rooms/${roomId}/users/${userId}/remove`)
			socket.emit('leaveRoom', { roomId, userId }, () => {
				console.log('Гарри рубленное мясо!')
			})
			localStorage.setItem('inRoom', 'false')
		} catch (error) {
			console.error('Error with leaving the room')
		}
	}

	useEffect(() => {
		socket.on('connect', () => {
			console.log('Connected to socket server in useConnectPlayerRoom')
		})

		socket.on('joinRoom', (roomWithUsers) => {
			console.log('Updated room with users after join')
		})

		socket.on('leaveRoom', (roomWithUsers) => {
			console.log('Updated room with users after leave')
		})

		socket.on('roomUsersUpdated', (roomWithUsers) => {
			console.log('room users updated is working from sockets!')
			setPlayers(roomWithUsers.users || [])
		})

		socket.on('playerLeft', (playerId: number | string) => {
			setPlayers(players.filter((player) => player.id !== playerId))
		})

		socket.on('connect_error', () => {
			console.log('there was an error with socket connection')
		})

		return () => {
			socket.off('join')
			socket.off('leaveRoom')
			socket.off('roomUsersUpdated')
			socket.off('playerJoined')
			socket.off('playerLeft')
			socket.disconnect()
		}
	}, [socket])

	return { players, joinRoom, leaveRoom, generalRoomId }
}
