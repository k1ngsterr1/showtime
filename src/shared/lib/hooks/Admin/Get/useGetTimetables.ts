import axios from 'axios'
import { useState } from 'react'

export function useGetTimetable() {
	const [timetableData, setTimetableData] = useState<any>()

	const getTimetable = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-timetables', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setTimetableData(response.data)
		} catch (error) {
			console.error('There was an error with getting timetable')
		}
	}

	return { getTimetable, timetableData }
}
