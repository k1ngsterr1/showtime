import axios from 'axios'
import { useState } from 'react'

export function useDeleteOnlineRating() {
	const deleteOnlineRating = async (email: string) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.delete(
				`https://showtimeserver-production.up.railway.app/api/admin/online/delete-stat/${encodeURIComponent(email)}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
		} catch (error) {
			console.error('There was an error with deleting showman')
		}
	}

	return { deleteOnlineRating }
}
