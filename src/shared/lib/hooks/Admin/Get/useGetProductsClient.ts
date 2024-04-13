import axios from 'axios'
import { useState } from 'react'

export function useGetProducts() {
	const [productsData, setProductsData] = useState<any>()

	const getProducts = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-products')
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
