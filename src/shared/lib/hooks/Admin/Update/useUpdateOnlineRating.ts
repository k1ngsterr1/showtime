import axios from 'axios'
import { useState } from 'react'

export function useUpdateOnlineStat() {
	const [statData, setStatData] = useState<any>()

	const updateOnlineStat = async (data: any) => {
		try {
			const formData = new FormData()
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh
			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtimeserver-production.up.railway.app/api/admin/online/update-stat',
				data,
				{
					headers: {
						'Content-Type':'application/json',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
			console.log('here is my data:', data, response.data)
			setStatData(response.data)
		} catch (error) {
			console.error('There was an error with adding article')
		}
	}

	return { updateOnlineStat, statData }
}
