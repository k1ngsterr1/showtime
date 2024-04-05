import axios from 'axios'
import { useState } from 'react'

export function useDeleteService() {
	const [serviceData, setServiceData] = useState<any>()

	const deleteService = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtime.up.railway.app/api/admin/delete-service',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setServiceData(response.data)
		} catch (error) {
			console.error('There was an error with deleting service')
		}
	}

	return { deleteService, serviceData }
}
