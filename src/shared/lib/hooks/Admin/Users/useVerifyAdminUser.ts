import axios from 'axios'
import { useState } from 'react'

export function useAddVerifiedAdminUser() {
	const [verifyUserData, setVerifyUserData] = useState<any>()

	const addAdminVerifyUser = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.post('https://showtime.up.railway.app/api/admin/verify-user', data, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${refreshToken}`
				}
			})
			console.log('here is my data:', data, response.data)

			setVerifyUserData(response.data)
		} catch (error) {
			console.error('There was an error with adding verified user')
		}
	}

	return { addAdminVerifyUser, verifyUserData }
}
