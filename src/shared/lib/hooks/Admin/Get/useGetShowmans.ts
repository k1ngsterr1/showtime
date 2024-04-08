import axios from 'axios'
import { useState } from 'react'

export function useGetShowmans() {
	const [showmansData, setShowmansData] = useState<any>()

	const getShowmans = async () => {
		try {
			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-showmans')

			setShowmansData(response.data)
		} catch (error) {
			console.error('There was an error with getting showmans')
		}
	}

	return { getShowmans, showmansData }
}
