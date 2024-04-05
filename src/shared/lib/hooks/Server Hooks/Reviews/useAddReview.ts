import axios from 'axios'
import { useState } from 'react'

export function useAddReview() {
	const [reviewData, setReviewData] = useState<any>()

	const addReview = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtime.up.railway.app/api/admin/add-review',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data' // Set the content type header for multipart form data
					}
				}
			)

			setReviewData(response.data)
		} catch (error) {
			console.error('There was an error with review adding')
		}
	}

	return { addReview, reviewData }
}
