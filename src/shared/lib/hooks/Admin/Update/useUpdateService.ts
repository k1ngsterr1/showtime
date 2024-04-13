import axios from 'axios'
import { useState } from 'react'

export function useUpdateService() {
	const [serviceData, setServiceData] = useState<any>()

	const updateService = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh
			const formData = new FormData()
			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch('https://showtime.up.railway.app/api/admin/update-service', data, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${refreshToken}`
				}
			})

			setServiceData(response.data)
		} catch (error) {
			console.error('There was an error with updating service')
		}
	}

	return { updateService, serviceData }
}
