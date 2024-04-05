import axios from 'axios'
import { useState } from 'react'

export function useGetServices() {
	const [servicesData, setServicesData] = useState<any>()

	const getServices = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-services', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setServicesData(response.data)
		} catch (error) {
			console.error('There was an error with getting services')
		}
	}

	return { getServices, servicesData }
}
