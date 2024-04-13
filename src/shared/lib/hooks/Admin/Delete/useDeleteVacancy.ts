import axios from 'axios'
import { useState } from 'react'

export function useDeleteVacancy() {
	const [vacancyData, setVacancyData] = useState<any>()

	const deleteVacancy = async (data: any) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.delete(
				`https://showtime.up.railway.app/api/admin/delete-vacancy/${data.vacancyId}`,
				{
					headers: {
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
		} catch (error) {
			console.error('There was an error with deleting vacancy')
		}
	}

	return { deleteVacancy, vacancyData }
}
