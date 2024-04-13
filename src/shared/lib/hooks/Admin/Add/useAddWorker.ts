import axios from 'axios'
import { useState } from 'react'

export function useAddWorker() {
	const [workerData, setWorkerData] = useState<any>()

	const addWorker = async (data: any) => {
		try {
			const formData = new FormData()
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post('https://showtime.up.railway.app/api/admin/add-worker', data, {
				withCredentials: true,
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${refreshToken}`
				}
			})
			console.log('here is my data:', data, response.data)
			setWorkerData(response.data)
		} catch (error) {
			console.error('There was an error with adding worker')
		}
	}

	return { addWorker, workerData }
}
