import axios from 'axios'
import { useState } from 'react'

export function useUpdateNews() {
	const [newsData, setNewsData] = useState<any>()

	const updateNews = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const response = await axios.patch(
				'https://showtimeserver-production.up.railway.app/api/admin/update-news',
				data,
				{
					headers: {
						// 'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${refreshToken}`
					}
				}
			)
			console.log('here is my data:', data, response.data)
			setNewsData(response.data)
		} catch (error) {
			console.error('There was an error with updating news')
		}
	}

	return { updateNews, newsData }
}
