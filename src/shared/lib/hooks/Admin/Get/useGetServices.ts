import axios from 'axios'
import { useState } from 'react'

export function useGetServices() {
	const [servicesData, setServicesData] = useState<any>()

	const getServices = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			console.log(refreshToken)
			const response = await axios.get('http://localhost:4200/api/admin/get-services', {
				headers: {
					Authorization: `Bearer ${refreshToken}`
				}
			})
			return response.data['services']
		} catch (error) {
			console.error('There was an error with getting services')
		}
	}

	return { getServices, servicesData }
}
