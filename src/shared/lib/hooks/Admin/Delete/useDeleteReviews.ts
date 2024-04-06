import axios from 'axios'
import { useState } from 'react'

export function useDeleteReview() {
	const deleteReview = async () => {
		try {
			const response = await axios.delete('https://showtime.up.railway.app/api/admin/delete-review')
		} catch (error) {
			console.error('There was an error with review adding')
		}
	}

	return { deleteReview }
}
