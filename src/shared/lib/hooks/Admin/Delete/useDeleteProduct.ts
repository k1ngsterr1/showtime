import axios from 'axios'
import { useState } from 'react'

export function useDeleteProduct() {
	const [productData, setProductData] = useState<any>()

	const deleteProduct = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.delete(
				`https://showtime.up.railway.app/api/admin/delete-product/${data.productId}`,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)

			console.log(response.data)

			setProductData(response.data)
		} catch (error) {
			console.error('There was an error with deleting product')
		}
	}

	return { deleteProduct, productData }
}
