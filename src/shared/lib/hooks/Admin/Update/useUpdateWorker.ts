import axios from 'axios'
import { useState } from 'react'

export function useUpdateWorker() {
	const [workerData, setWorkerData] = useState<any>()

	const updateWorker = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/update-worker',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
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
