import axios from 'axios'
import { useState } from 'react'

export function useGetTimetables() {
	const [timetablesData, setTimetablesData] = useState<any>()

	const getTimetables = async () => {
		try {
			const response = await axios.get('http://localhost:4200/api/admin/get-timetables', {
				withCredentials: true
			})
			const timetables = response.data['timetables']
			console.log('here is my data:', response.data)
			return response.data['timetables']
			setTimetablesData(response.data)
		} catch (error) {
			console.error('There was an error with getting timetables')
		}
	}

	return { getTimetables, timetablesData }
}
