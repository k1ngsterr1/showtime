import axios from 'axios'
import { io } from 'socket.io-client'

interface ICreateGameProps {
	gameType: 'Город' | 'Бункер' | 'Классика'
	roomName: string
	capacity: number
	creatorId?: number
}

const socket = io('http://localhost:4000', { path: '/sockets/' })

export async function createRoom(roomData: ICreateGameProps, userId: number) {
	try {
		const response = await axios.post('http://localhost:4000/api/rooms/create-room	', roomData)

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
