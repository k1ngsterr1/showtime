import axios from 'axios'
import { useState } from 'react'

export function useGetProducts() {
	const [productsData, setProductsData] = useState<any>()

	const getProducts = async () => {
		try {
			const response = await axios.get('http://localhost:4200/api/admin/get-products', {
				withCredentials: true
			})
			const products = response.data['products']
			console.log('here is my data:', response.data)
			return response.data['products']
			setProductsData(response.data)
		} catch (error) {
			console.error('There was an error with getting products')
		}
	}

	return { getProducts, productsData }
}
