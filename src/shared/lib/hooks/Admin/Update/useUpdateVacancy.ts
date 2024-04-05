import axios from 'axios'
import { useState } from 'react'

export function useUpdateVacancy() {
	const [vacancyData, setVacancyData] = useState<any>()

	const updateVacancy = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.patch(
				'https://showtime.up.railway.app/api/admin/update-vacancy',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setVacancyData(response.data)
		} catch (error) {
			console.error('There was an error with updating vacancy')
		}
	}

	return { updateVacancy, vacancyData }
}
