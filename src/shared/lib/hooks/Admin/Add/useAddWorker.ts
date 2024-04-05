import axios from 'axios'
import { useState } from 'react'

export function useAddWorker() {
	const [workerData, setWorkerData] = useState<any>()

	const addWorker = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtime.up.railway.app/api/admin/add-worker',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setWorkerData(response.data)
		} catch (error) {
			console.error('There was an error with adding worker')
		}
	}

	return { addWorker, workerData }
}
