import axios from 'axios'
import { useState } from 'react'

export function useDeleteTimetable() {
	const [timetableData, setTimetableData] = useState<any>()

	const updateTimetable = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/update-timetable',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setTimetableData(response.data)
		} catch (error) {
			console.error('There was an error with deleting timetable')
		}
	}

	return { updateTimetable, timetableData }
}
