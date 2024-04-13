import axios from 'axios'
import { useState } from 'react'

export function useDeleteWorker() {
	const [workerData, setWorkerData] = useState<any>()

	const deleteWorker = async (data: any) => {
		const userData = JSON.parse(localStorage.getItem('userData'))
		const refreshToken = userData.refresh

		try {
			const response = await axios.delete(
				`https://showtime.up.railway.app/api/admin/delete-worker/${data.workerId}`,
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${refreshToken}`
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
