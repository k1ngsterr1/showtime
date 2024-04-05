import axios from 'axios'
import { useState } from 'react'

export function useGetOrders() {
	const [ordersData, setOrdersData] = useState<any>()

	const getOrders = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-orders', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setOrdersData(response.data)
		} catch (error) {
			console.error('There was an error with getting orders')
		}
	}

	return { getOrders, ordersData }
}
