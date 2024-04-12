import axios from 'axios'
import { useState } from 'react'

export function useGetVacancies() {
	const [vacanciesData, setVacanciesData] = useState<any>()

	const getVacancies = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			console.log(refreshToken)
			const response = await axios.get('http://localhost:4200/api/admin/get-vacancies', {
				headers: {
					Authorization: `Bearer ${refreshToken}`
				}
			})
			return response.data['vacancies']
		} catch (error) {
			console.error('There was an error with getting vacancies')
		}
	}

	return { getVacancies, vacanciesData }
}
