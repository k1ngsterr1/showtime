import axios from 'axios'
import { useState } from 'react'

export function useDeleteReview() {
	const [reviewData, setReviewData] = useState<any>()

	const deleteReview = async (data: any) => {
		try {
			const response = await axios.delete(
				`http://localhost:4200/api/admin/delete-review/${data.reviewId}`,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)

			console.log(response.data)

			setReviewData(response.data)
		} catch (error) {
			console.error('There was an error with deleting showman')
		}
	}

	return { deleteReview, reviewData }
}
