import axios from 'axios'
import { useState } from 'react'

export function useGetTimetables() {
	const [timetablesData, setTimetablesData] = useState<any>()

	const getTimetables = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			console.log(refreshToken)
			const response = await axios.get('http://localhost:4200/api/admin/get-timetables', {
				headers: {
					Authorization: `Bearer ${refreshToken}`
				}
			})

			console.log('here is my data:', response.data)

			const timetables = response.data['timetables']
			setTimetablesData(response.data)
			return response.data['timetables']
		} catch (error) {
			console.error('There was an error with getting timetables')
		}
	}

	return { getTimetables, timetablesData }
}
