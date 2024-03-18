import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetScore = () => {
	const [scoreData, setScoreData] = useState(null)
	const [error, setError] = useState<any>(null)

	useEffect(() => {
		const fetchScoreData = async () => {
			try {
				const userData = JSON.parse(localStorage.getItem('userData'))
				if (!userData) return

				const response = await axios.get(`https://showtime.up.railway.app/api/score/${userData.id}`)

				console.log('response from fetchScoreData:', response.data.score)

				setScoreData(response.data.score)
			} catch (err) {
				console.error('Failed to fetch score data:', err)
				setError(err)
			}
		}

		fetchScoreData()
	}, [])

	return { scoreData, error }
}
