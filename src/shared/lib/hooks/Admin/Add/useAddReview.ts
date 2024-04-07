import axios from 'axios'
import { useState } from 'react'

export function useAddReview() {
	const [reviewData, setReviewData] = useState<any>()

	const addReview = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post('http://localhost:4200/api/admin/add-review', data, {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('here is my data:', data, response.data)
			setReviewData(response.data)
		} catch (error) {
			console.error('There was an error with review adding')
		}
	}

	return { addReview, reviewData }
}
