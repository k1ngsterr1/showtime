import axios from 'axios'
import { useState } from 'react'

export function useUpdateProduct() {
	const [productData, setProductData] = useState<any>()

	const updateProduct = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.patch(
				'https://showtimeserver-production.up.railway.app/api/admin/update-product',
				data,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
			console.log('here is my data:', data, response.data)
			setProductData(response.data)
		} catch (error) {
			console.error('There was an error with updating showman')
		}
	}

	return { updateProduct, productData }
}
