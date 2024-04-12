import axios from 'axios'
import { useState } from 'react'

export function useAddShowman() {
	const [showmanData, setShowmanData] = useState<any>()
	// const userData =
	// 	typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData')) : null
	// const token = userData ? userData.refresh : ''

	const addShowman = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			// console.log(refreshToken)
			const response = await axios.post('http://localhost:4200/api/admin/add-showman', data, {
				headers: {
					// 'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${refreshToken}`
				}
			})
			console.log('here is my data:', data, response.data)
			setShowmanData(response.data)
		} catch (error) {
			console.error('There was an error with adding showman')
			return null
		}
	}

	return { addShowman, showmanData }
}
