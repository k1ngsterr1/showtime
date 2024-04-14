import axios from 'axios'
import { useState } from 'react'

export function useAddVacancy() {
	const [vacancyData, setVacancyData] = useState<any>()

	const addVacancy = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.post(
				'https://showtimeserver-production.up.railway.app/api/admin/add-vacancy',
				data,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
			console.log('here is my data:', data, response.data)
			setVacancyData(response.data)
		} catch (error) {
			console.error('There was an error with adding vacancy')
		}
	}

	return { addVacancy, vacancyData }
}
