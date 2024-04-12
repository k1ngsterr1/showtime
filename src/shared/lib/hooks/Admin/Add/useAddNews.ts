import axios from 'axios'
import { useState } from 'react'

export function useAddNews() {
	const [newsData, setNewsData] = useState<any>()

	const addNews = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.post('http://localhost:4200/api/admin/add-news', data, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${refreshToken}`
				}
			})
			console.log('here is my data:', data, response.data)
		} catch (error) {
			console.error('There was an error with adding news')
		}
	}

	return { addNews, newsData }
}
