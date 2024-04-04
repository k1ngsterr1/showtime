import axios from 'axios'
import { useState } from 'react'

export function useDeleteProduct() {
	const [productData, setProductData] = useState<any>()

	const deleteProduct = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.delete(
				'https://showtime.up.railway.app/api/admin/delete-product',
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setProductData(response.data)
		} catch (error) {
			console.error('There was an error with deleting product')
		}
	}

	return { deleteProduct, productData }
}
