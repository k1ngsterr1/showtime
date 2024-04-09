import axios from 'axios'
import { useState } from 'react'

export function useGetOrders() {
	const [ordersData, setOrdersData] = useState<any>()

	const getOrders = async () => {
		try {
			const response = await axios.get('http://localhost:4200/api/admin/get-orders', {
				withCredentials: true
			})
			console.log('here is my data:', response.data)
			return response.data['orders']
		} catch (error) {
			console.error('There was an error with getting orders')
		}
	}

	return { getOrders, ordersData }
}
