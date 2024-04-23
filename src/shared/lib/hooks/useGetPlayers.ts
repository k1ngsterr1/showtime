import axios from 'axios'
import { useState, useEffect } from 'react'

export function useGetPlayers(roomId: number) {
	const [players, setPlayers] = useState<any[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchPlayers = async () => {
			try {
				const response = await axios.get(
					`https://showtimeserver-production.up.railway.app/api/rooms/${roomId}/users`
				)
				setPlayers(response.data.users)
			} catch (error) {
				setError('There was an error fetching players')
				console.error(error)
			}
		}

		if (roomId) {
			fetchPlayers()
		}
	}, [roomId])

	return { players, error }
}
