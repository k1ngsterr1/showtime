import axios from 'axios'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

interface ICreateGameProps {
	gameType: 'Город' | 'Бункер' | 'Классика'
	roomName: string
	capacity: number
	creatorId?: number
}

const socket = io('https://showtime.up.railway.app', {
	path: '/sockets/',
	transports: ['polling', 'websocket'],
	reconnectionAttempts: 5,
	reconnectionDelay: 2000
})

export async function createRoom(roomData: ICreateGameProps, userId: number) {
	try {
		const response = await axios.post(
			'https://showtime.up.railway.app/api/rooms/create-room	',
			roomData
		)

		const createdRoomId = response.data.id

		socket.on('connect', () => {
			console.log('Connected to socket server')
		})

		socket.on('roomCreated', (newRoom) => {
			console.log('ROOM CREATED!!!')
		})

		socket.emit('joinRoom', { roomId: createdRoomId, userId })

		return response.data
	} catch (error: any) {
		console.error('Failde to create room:', error.response ? error.response.data : error)
		return null
	}
}
