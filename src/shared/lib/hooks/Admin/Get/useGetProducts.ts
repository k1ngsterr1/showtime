import axios from 'axios'
import { useState } from 'react'

export function useGetProducts() {
	const [productsData, setProductsData] = useState<any>()

	const getProducts = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			console.log(refreshToken)
			const response = await axios.get(
				'https://showtimeserver-production.up.railway.app/api/admin/get-products',
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
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
