import axios from 'axios'
import { useState } from 'react'

export function useUpdateWorker() {
	const [workerData, setWorkerData] = useState<any>()

	const updateWorker = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh
			const formData = new FormData()
			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtimeserver-production.up.railway.app/api/admin/update-worker',
				data,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)

			setWorkerData(response.data)
		} catch (error) {
			console.error('There was an error with updating worker')
		}
	}

	return { updateWorker, workerData }
}
