import axios from 'axios'
import { useState } from 'react'

export function useDeleteProduct() {
	const [productData, setProductData] = useState<any>()

	const deleteProduct = async (data: any) => {
		try {
			const response = await axios.delete(
				`http://localhost:4200/api/admin/delete-product/${data.productId}`,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
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
