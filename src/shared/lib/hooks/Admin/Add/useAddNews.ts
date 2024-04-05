import axios from 'axios'
import { useState } from 'react'

export function useAddNews() {
	const [newsData, setNewsData] = useState<any>()

	const addNews = async (data: any) => {
		try {
			const formData = new FormData()

			Object.keys(data).forEach((key) => formData.append(key, data[key]))

			const response = await axios.post(
				'https://showtime.up.railway.app/api/admin/add-news',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			)

			setNewsData(response.data)
		} catch (error) {
			console.error('There was an error with adding news')
		}
	}

	return { addNews, newsData }
}
