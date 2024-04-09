import axios from 'axios'
import { useState } from 'react'

export function useDeleteVacancy() {
	const [vacancyData, setVacancyData] = useState<any>()

	const deleteVacancy = async (data: any) => {
		try {
			const response = await axios.delete(
				`http://localhost:4200/api/admin/delete-vacancy/${data.vacancyId}`,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json'
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
