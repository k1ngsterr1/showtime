import axios from 'axios'
import { useState } from 'react'

export function useAddVerifiedUser() {
	const [verifyUserData, setVerifyUserData] = useState<any>()

	const addVerifyUser = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtime.up.railway.app/api/admin/verify-user',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setVerifyUserData(response.data)
		} catch (error) {
			console.error('There was an error with adding verified user')
		}
	}

	return { addVerifyUser, verifyUserData }
}
