import axios from 'axios'
import { useState } from 'react'

export function useGetUnverifiedUsers() {
	const [unverifiedUsersData, setUnverifiedUsersData] = useState<any>()

	const getUnverifiedUsers = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get(
				'https://showtime.up.railway.app/api/admin/unverified/users',
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setUnverifiedUsersData(response.data)
		} catch (error) {
			console.error('There was an error with getting unverified users')
		}
	}

	return { getUnverifiedUsers, unverifiedUsersData }
}
