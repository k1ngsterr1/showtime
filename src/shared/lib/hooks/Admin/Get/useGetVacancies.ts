import axios from 'axios'
import { useState } from 'react'

export function useGetVacancies() {
	const [vacanciesData, setVacanciesData] = useState<any>()

	const getVacancies = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.get('https://showtime.up.railway.app/api/admin/get-vacancies', {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			setVacanciesData(response.data)
		} catch (error) {
			console.error('There was an error with getting vacancies')
		}
	}

	return { getVacancies, vacanciesData }
}
