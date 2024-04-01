import axios from 'axios'
import { socket } from '../socket/socketService'
import { io } from 'socket.io-client'

interface ICreateGameProps {
	gameType: 'Город' | 'Бункер' | 'Классика'
	roomName: string
	capacity: number
	creatorId?: number
}

export async function createRoom(roomData: ICreateGameProps, userId: number) {
	try {
		const response = await axios.post(
			'https://showtime.up.railway.app/api/rooms/create-room',
			roomData
		)

		const createdRoomId = response.data.id

		socket.on('connect', () => {
			console.log('Connected to socket server')
		})

		socket.on('roomCreated', (newRoom) => {
			console.log('ROOM CREATED!!!')
		})

		// socket.on('roomUsersUpdated', () => {
		// 	console.log('ROOM USERS UPDATED ARE WORKING')
		// })

		socket.emit('joinRoom', { roomId: createdRoomId, userId })

		socket.on('disconnect', () => {
			console.log('sockets are disconnecting')
		})

		return {
			data: response.data,
			cleanup: () => {
				socket.off('connect')
				socket.off('roomCreated')
				// socket.off('roomUsersUpdated', handleRoomUsersUpdated);
			}
		}
	} catch (error: any) {
		console.error('Failed to create room:', error.response ? error.response.data : error)
		return null
	}
}
