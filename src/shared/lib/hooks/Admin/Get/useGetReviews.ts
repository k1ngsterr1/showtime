import axios from 'axios'
import { useState } from 'react'

export function useGetReviews() {
	const [reviewData, setReviewData] = useState<any>()

	const getReviews = async () => {
		try {
			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-reviews')
			const reviews = response.data['reviews']
			console.log('here is my data:', response.data)
			return response.data['reviews']
		} catch (error) {
			console.error('There was an error with review adding')
		}
	}

	return { getReviews, reviewData }
}
