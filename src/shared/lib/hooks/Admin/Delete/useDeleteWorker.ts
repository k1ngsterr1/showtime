import axios from 'axios'
import { useState } from 'react'

export function useDeleteWorker() {
	const [workerData, setWorkerData] = useState<any>()

	const deleteWorker = async (data: any) => {
		try {
			const response = await axios.delete(
				`http://localhost:4200/api/admin/delete-worker/${data.workerId}`,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
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
