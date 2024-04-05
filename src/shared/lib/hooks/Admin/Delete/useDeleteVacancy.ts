import axios from 'axios'
import { useState } from 'react'

export function useDeleteVacancy() {
	const [vacancyData, setVacancyData] = useState<any>()

	const deleteVacancy = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.delete(
				'https://showtime.up.railway.app/api/admin/delete-vacancy',
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setVacancyData(response.data)
		} catch (error) {
			console.error('There was an error with deleting vacancy')
		}
	}

	return { deleteVacancy, vacancyData }
}
