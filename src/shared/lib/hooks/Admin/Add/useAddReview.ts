import axios from 'axios'
import { useState } from 'react'

export function useAddReview() {
	const [reviewData, setReviewData] = useState<any>()

	const addReview = async (data: any) => {
		try {
			const formData = new FormData()
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh
			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtimeserver-production.up.railway.app/api/admin/add-review',
				data,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`,
						'Content-Type': 'application/json'
					}
				}
			)
			console.log('here is my data:', data, response.data)
			setReviewData(response.data)
		} catch (error) {
			console.error('There was an error with review adding')
		}
	}

	return { addReview, reviewData }
}
