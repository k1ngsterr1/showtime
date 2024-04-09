import axios from 'axios'
import { useState } from 'react'

export function useDeleteService() {
	const [serviceData, setServiceData] = useState<any>()

	const deleteService = async (data: any) => {
		try {
			const response = await axios.delete(
				`http://localhost:4200/api/admin/delete-service/${data.serviceId}`,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
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
