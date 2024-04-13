import axios from 'axios'
import { useState } from 'react'

export function useGetOrders() {
	const [ordersData, setOrdersData] = useState<any>()

	const getOrders = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-orders', {
				headers: {
					Authorization: `Bearer ${refreshToken}`,
					'Content-Type': 'application/json'
				}
			})
			console.log('here is my data:', response.data)
			return response.data['orders']
		} catch (error) {
			console.error('There was an error with getting orders')
		}
	}

	return { getOrders, ordersData }
}
