import axios from 'axios'
import { useState } from 'react'

export function useDeleteWorker() {
	const [workerData, setWorkerData] = useState<any>()

	const deleteWorker = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.delete(
				'https://showtime.up.railway.app/api/admin/delete-worker',
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setWorkerData(response.data)
		} catch (error) {
			console.error('There was an error with deleting the worker data')
		}
	}

	return { deleteWorker, workerData }
}
