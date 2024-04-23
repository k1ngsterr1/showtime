import axios from 'axios'
import { useState } from 'react'

export function useGetOffStats() {
	const [statData, setStatData] = useState<any>()

	const getStats = async () => {
		try {
			const response = await axios.get(
				'https://showtimeserver-production.up.railway.app/api/admin/get-stat',
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)

			setStatData(response.data.stats)
			return statData
		} catch (error) {
			console.error('There was an error with getting orders')
		}
	}

	return { getStats, statData }
}
