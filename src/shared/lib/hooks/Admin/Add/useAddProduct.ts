import axios from 'axios'
import { useState } from 'react'

export function useAddProduct() {
	const [productData, setProductData] = useState<any>()

	const addProduct = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtime.up.railway.app/api/admin/add-product',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setProductData(response.data)
		} catch (error) {
			console.error('There was an error with adding product')
		}
	}

	return { addProduct, productData }
}
