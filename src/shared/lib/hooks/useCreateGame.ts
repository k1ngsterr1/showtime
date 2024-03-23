import axios from 'axios'
import { io } from 'socket.io-client'

interface ICreateGameProps {
	gameType: 'Город' | 'Бункер' | 'Классика'
	roomName: string
	capacity: number
	creatorId?: number
}

const socket = io('http://localhost:4000', { path: '/sockets/' })

export async function createRoom(roomData: ICreateGameProps) {
	try {
		const response = await axios.post(
			'https://showtime.up.railway.app/api/rooms/create-room',
			roomData
		)
	} catch (error: any) {
		console.error('Failde to create room:', error.response ? error.response.data : error)
		return null
	}
}
