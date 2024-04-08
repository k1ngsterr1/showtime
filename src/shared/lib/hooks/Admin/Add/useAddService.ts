import axios from 'axios'
import { useState } from 'react'

export function useAddService() {
	const [serviceData, setServiceData] = useState<any>()

	const addService = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post('http://localhost:4200/api/admin/add-service', data, {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('here is my data:', data, response.data)
			setServiceData(response.data)
		} catch (error) {
			console.error('There was an error with adding service')
		}
	}

	return { addService, serviceData }
}
