import axios from 'axios'
import { useState } from 'react'

export function useUpdateReview() {
	const updateReview = async (data: any) => {
		try {
			const formData = new FormData()
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh
			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtimeserver-production.up.railway.app/api/admin/update-review',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
		} catch (error) {
			console.error('There was an error with review adding')
		}
	}

	return { updateReview }
}
