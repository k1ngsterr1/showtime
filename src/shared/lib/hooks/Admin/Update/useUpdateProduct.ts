import axios from 'axios'
import { useState } from 'react'

export function useUpdateProduct() {
	const [productData, setProductData] = useState<any>()

	const updateProduct = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/update-product',
				{
					headers: {
						'Content-Type': 'multipart/form-data'
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
