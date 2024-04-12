import axios from 'axios'
import { useState } from 'react'

export function useAddTimetable() {
	const [timetableData, setTimetableData] = useState<any>()

	const addTimetable = async (data: any) => {
		try {
			const formData = new FormData()
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			// console.log(refreshToken)
			const response = await axios.post('http://localhost:4200/api/admin/add-timetable', data, {
				headers: {
<<<<<<< HEAD
					// 'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${refreshToken}`
=======
					Authorization: `Bearer ${refreshToken}`,
					'Content-Type': 'application/json'
>>>>>>> 950e8f754d0acbadcf5f7dd189d72869fdb1a81e
				}
			})

			console.log('here is my data:', data, response.data)

			setTimetableData(response.data)
		} catch (error) {
			console.error('There was an error with adding timetable')
		}
	}

	return { addTimetable, timetableData }
}
