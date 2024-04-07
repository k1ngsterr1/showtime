import axios from 'axios'
import { useState } from 'react'

export function useAddVacancy() {
	const [vacancyData, setVacancyData] = useState<any>()

	const addVacancy = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post('http://localhost:4200/api/admin/add-vacancy', data, {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('here is my data:', data, response.data)
			setVacancyData(response.data)
		} catch (error) {
			console.error('There was an error with adding vacancy')
		}
	}

	return { addVacancy, vacancyData }
}
