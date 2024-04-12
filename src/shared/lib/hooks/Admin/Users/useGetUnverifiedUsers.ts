import axios from 'axios'
import { useState } from 'react'

export function useGetUnverifiedUsers() {
	const getUnverifiedUsers = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh
			const response = await axios.get(
				'http://localhost:4200/api/admin/unverified/users',
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)

			return response.data['list'];
		} catch (error) {
			console.error('There was an error with getting unverified users')
		}
	}

	return { getUnverifiedUsers }
}
