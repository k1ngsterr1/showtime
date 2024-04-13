import axios from 'axios'
import { useState } from 'react'

export function useUpdateTimetable() {
	const [timetableData, setTimetableData] = useState<any>()

	const updateTimetable = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const formData = new FormData()
			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/update-timetable',
				data,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
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
