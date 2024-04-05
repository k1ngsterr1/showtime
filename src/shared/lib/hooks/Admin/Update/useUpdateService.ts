import axios from 'axios'
import { useState } from 'react'

export function useUpdateService() {
	const [serviceData, setServiceData] = useState<any>()

	const updateService = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/update-service',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setServiceData(response.data)
		} catch (error) {
			console.error('There was an error with updating service')
		}
	}

	return { updateService, serviceData }
}
