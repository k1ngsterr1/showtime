import { services } from './../../../content/servicesListContent'
import axios from 'axios'
import { useState } from 'react'

export function useDeleteService() {
	const [serviceData, setServiceData] = useState<any>()

	const deleteService = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.delete(
				`https://showtimeserver-production.up.railway.app/api/admin/delete-service/${data.serviceId}`,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
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
