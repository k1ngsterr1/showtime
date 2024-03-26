import axios from 'axios'
import { useState, useEffect } from 'react'

export function useCheckUserRoom(userId: number) {
	const [hasRoom, setHasRoom] = useState(false)
	const [roomData, setRoomData] = useState<any>('')

	useEffect(() => {
		const checkUserRoom = async () => {
			try {
				const response = await axios.get(`https://showtime.up.railway.app/api/rooms/${userId}/room`)

				if (response.data.room.creatorId === userId) {
					setHasRoom(true)
					setRoomData(response.data.room.roomName)
				} else {
					setHasRoom(false)
				}
			} catch (error) {
				console.error('There was an error with room checking:', error)
			}
		}

		checkUserRoom()
	}, [])

	return { hasRoom, roomData }
}
