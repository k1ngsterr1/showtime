import axios from 'axios'

interface ICreateGameProps {
	gameType: 'Город' | 'Бункер' | 'Классика'
	roomName: string
	capacity: number
	creatorId?: number
}

export async function createRoom(roomData: ICreateGameProps) {
	try {
		const response = await axios.post(
			'https://showtime.up.railway.app/api/rooms/create-room',
			roomData
		)

		console.log(response, 'ROOM CREATED')
	} catch (error: any) {
		console.error('Failed to create room:', error.response ? error.response.data : error)
		return null
	}
}
