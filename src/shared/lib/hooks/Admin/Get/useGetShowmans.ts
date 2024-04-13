import axios from 'axios'
import { useState } from 'react'

export function useGetShowmans() {
	const getShowmans = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			console.log(refreshToken)
			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-showmans', {
				headers: {
					Authorization: `Bearer ${refreshToken}`
				}
			})
			return response.data['showmans']
		} catch (error) {
			console.error('There was an error with getting showmans')
			return null
		}
	}

	return { getShowmans }
}
