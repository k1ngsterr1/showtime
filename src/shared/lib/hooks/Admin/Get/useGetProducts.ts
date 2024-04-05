import axios from 'axios'
import { useState } from 'react'

export function useGetProducts() {
	const [productsData, setProductsData] = useState<any>()

	const getProducts = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-products', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setProductsData(response.data)
		} catch (error) {
			console.error('There was an error with getting products')
		}
	}

	return { getProducts, productsData }
}
