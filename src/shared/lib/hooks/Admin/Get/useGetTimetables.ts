import axios from 'axios'
import { useState } from 'react'

export function useGetTimetables() {
	const [timetablesData, setTimetablesData] = useState<any>()

	const getTimetables = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-timetables', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setTimetablesData(response.data)
		} catch (error) {
			console.error('There was an error with getting timetables')
		}
	}

	return { getTimetables, timetablesData }
}
