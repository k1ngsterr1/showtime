import axios from 'axios'
import { useState } from 'react'

export function useGetOrders() {
	const [ordersData, setOrdersData] = useState<any>()

	const getOrders = async () => {
		try {
			const response = await axios.get('https://localhost:4200/api/admin/get-orders', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			// const orders = response.data['orders']
			// console.log('here is my data:', response.data)
			// return response.data['orders']
			setOrdersData(response.data)
		} catch (error) {
			console.error('There was an error with getting orders')
		}
	}

	return { getOrders, ordersData }
}
