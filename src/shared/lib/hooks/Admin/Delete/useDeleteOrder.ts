import axios from 'axios'
import { useState } from 'react'

export function useDeleteOrder() {
	const [ordersData, setOrdersData] = useState<any>()

	const deleteOrder = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.delete(
				`https://showtime.up.railway.app/api/admin/delete-order/${data.orderId}`,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`,
						'Content-Type': 'application/json'
					}
				}
			)

			setOrdersData(response.data)
		} catch (error) {
			console.error('There was an error with deleting orders')
		}
	}

	return { deleteOrder, ordersData }
}
