import axios from 'axios'
import { useState } from 'react'

export function useGetWorkers() {
	const [workersData, setWorkersData] = useState<any>()

	const getWorkers = async () => {
		try {
			const response = await axios.get('http://localhost:4200/api/admin/get-workers', {
				withCredentials: true
			})
			const users = response.data
			console.log('here is my data:', response.data)
			return response.data['workers']
		} catch (error) {
			console.error('There was an error with getting the workers data')
		}
	}

	return { getWorkers, workersData }
}
