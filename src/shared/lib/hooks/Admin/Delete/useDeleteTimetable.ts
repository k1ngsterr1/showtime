import axios from 'axios'
import { useState } from 'react'

export function useDeleteTimetable() {
	const [timetableData, setTimetableData] = useState<any>()

	const deleteTimetable = async (data: any) => {
		try {
			const response = await axios.delete(
				`http://localhost:4200/api/admin/delete-timetable/${data.timetableId}`,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
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
