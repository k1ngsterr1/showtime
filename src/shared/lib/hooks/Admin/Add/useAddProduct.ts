import axios from 'axios'
import { useState } from 'react'

export function useAddProduct() {
	const [productData, setProductData] = useState<any>()

	const addProduct = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.post('http://localhost:4200/api/admin/add-product', data, {
				headers: {
					Authorization: `Bearer ${refreshToken}`
				}
			})
			console.log('here is my data:', data, response.data)
			setProductData(response.data)
		} catch (error) {
			console.error('There was an error with adding product')
		}
	}

	return { addProduct, productData }
}
