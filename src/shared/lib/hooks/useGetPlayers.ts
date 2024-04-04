import axios from 'axios'
import { useState, useEffect } from 'react'

export function useGetPlayers(roomId: number) {
	const [players, setPlayers] = useState<any>()
	const [error, setError] = useState(null)

	console.log('get players is working!', roomId)

	useEffect(() => {
		console.log('get players!')

		const fetchPlayers = async () => {
			try {
				const response = await axios.get(`http://localhost:4000/api/rooms/${roomId}/users`)
				console.log('fetch players response:', response.data.users)
				setPlayers(response.data.users)
			} catch (error) {
				console.error('There was an error with players fetching:', error)
				setError(error)
			}
		}

		if (roomId) {
			fetchPlayers()
		}
	}, [roomId])

	return { players, error }
}
