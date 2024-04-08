import axios from 'axios'
import { useState } from 'react'

export function useGetServices() {
	const [servicesData, setServicesData] = useState<any>()

	const getServices = async () => {
		try {
			const response = await axios.get('http://localhost:4200/api/admin/get-services', {
				withCredentials: true
			})
			const services = response.data
			console.log('here is my data:', response.data)
			return response.data['services']

			setServicesData(response.data)
		} catch (error) {
			console.error('There was an error with getting services')
		}
	}

	return { getServices, servicesData }
}
