import axios from 'axios'
import { useState } from 'react'

export function useGetWorkers() {
	const [workersData, setWorkersData] = useState<any>()

	const getWorkers = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-workers', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setWorkersData(response.data)
		} catch (error) {
			console.error('There was an error with getting the workers data')
		}
	}

	return { getWorkers, workersData }
}
