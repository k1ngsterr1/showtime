import axios from 'axios'
import { useState } from 'react'

export function useUpdateProduct() {
	const [productData, setProductData] = useState<any>()

	const updateProduct = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh
			const formData = new FormData()
			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/update-product',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)

			setProductData(response.data)
		} catch (error) {
			console.error('There was an error with updating product')
		}
	}

	return { updateProduct, productData }
}
