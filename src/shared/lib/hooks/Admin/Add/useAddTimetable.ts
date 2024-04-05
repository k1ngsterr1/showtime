import axios from 'axios'
import { useState } from 'react'

export function useAddTimetable() {
	const [timetableData, setTimetableData] = useState<any>()

	const addTimetable = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtime.up.railway.app/api/admin/add-timetable',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setTimetableData(response.data)
		} catch (error) {
			console.error('There was an error with adding timetable')
		}
	}

	return { addTimetable, timetableData }
}
