import axios from 'axios'
import { useState } from 'react'

export function useGetOnlineStats() {
	const [statData, setStatData] = useState<any>()

	const getOnlineStats = async () => {
		try {
			const response = await axios.get(
				'https://showtimeserver-production.up.railway.app/api/admin/online/get-stat/1',
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
			const statsArray = Object.values(response.data.stats);

			console.log('zhopa is working here:', statsArray)

			setStatData(statsArray)
			return statData
		} catch (error) {
			console.error('There was an error with getting orders')
		}
	}

	return { getOnlineStats, statData }
}
