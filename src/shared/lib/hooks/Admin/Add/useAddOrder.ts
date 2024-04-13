import axios from 'axios'
import { useState } from 'react'

export function useAddOrder() {
	const [orderData, setOrderData] = useState<any>()
	// const userData =
	// 	typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData')) : null
	// const token = userData ? userData.refresh : ''

	const addOrder = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.post(
				'https://showtime.up.railway.app/api/user/add-order',
				data,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`,
						'Content-Type': 'application/json'
					}
				}
			)

			console.log('here is my data:', data, response.data)
			setOrderData(response.data)
		} catch (error) {
			console.error('There was an error with adding order')
			return null
		}
	}

	return { addOrder, orderData }
}
