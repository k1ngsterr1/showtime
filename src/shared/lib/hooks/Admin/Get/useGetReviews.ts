import axios from 'axios'
import { useState } from 'react'

export function useGetReviews() {
	const [reviewData, setReviewData] = useState<any>()

	const getReview = async () => {
		try {
			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-reviews')

			setReviewData(response.data)
		} catch (error) {
			console.error('There was an error with review adding')
		}
	}

	return { getReview, reviewData }
}
