import axios from 'axios'
import { useState } from 'react'

export function useDeleteOrders() {
	const [ordersData, setOrdersData] = useState<any>()

	const deleteOrders = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.delete(
				'https://showtime.up.railway.app/api/admin/delete-orders',
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setOrdersData(response.data)
		} catch (error) {
			console.error('There was an error with deleting orders')
		}
	}

	return { deleteOrders, ordersData }
}
