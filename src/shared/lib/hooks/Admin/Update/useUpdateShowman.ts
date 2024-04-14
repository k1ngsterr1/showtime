import axios from 'axios'
import { useState } from 'react'

export function useUpdateShowman() {
	const [showmanData, setShowmanData] = useState<any>()

	const updateShowman = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.patch(
				'https://showtimeserver-production.up.railway.app/api/admin/update-showman',
				data,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
			console.log('here is my data:', data, response.data)
			setShowmanData(response.data)
		} catch (error) {
			console.error('There was an error with updating showman')
		}
	}

	return { updateShowman, showmanData }
}
