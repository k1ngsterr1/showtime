import axios from 'axios'
import { useState } from 'react'

export function useUpdateReview() {
	const updateReview = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/update-review',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data' // Set the content type header for multipart form data
					}
				}
			)
		} catch (error) {
			console.error('There was an error with review adding')
		}
	}

	return { updateReview }
}
