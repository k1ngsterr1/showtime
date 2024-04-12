import axios from 'axios'
import { useState } from 'react'

export function useDeleteTimetable() {
	const [timetableData, setTimetableData] = useState<any>()

	const deleteTimetable = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.delete(
				`http://localhost:4200/api/admin/delete-timetable/${data.timetableId}`,
				{
					withCredentials: true,
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

	return { deleteTimetable, timetableData }
}
